import { Injectable, BadRequestException } from '@nestjs/common';
import { Request } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

interface FileData {
  originalname: string;
  filename: string;
  size: number;
  mimetype: string;
  path: string;
  buffer: Buffer;
}

@Injectable()
export class FileService {
  private readonly uploadDir = './uploads';

  constructor() {
    // Crear directorio de uploads si no existe
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async uploadFile(req: Request): Promise<FileData> {
    return new Promise((resolve, reject) => {
      let body = Buffer.alloc(0);
      let contentType = '';
      let filename = '';
      let boundary = '';
      const maxFileSize = 50 * 1024 * 1024; // 50MB limit
      let totalSize = 0;

      // Obtener el boundary del Content-Type
      const contentTypeHeader = req.headers['content-type'];
      if (!contentTypeHeader || !contentTypeHeader.includes('multipart/form-data')) {
        reject(new Error('Content-Type debe ser multipart/form-data'));
        return;
      }

      const boundaryMatch = contentTypeHeader.match(/boundary=(.+)$/);
      if (!boundaryMatch) {
        reject(new Error('Boundary no encontrado en Content-Type'));
        return;
      }
      boundary = '--' + boundaryMatch[1];

      // Recopilar datos del request con límite de tamaño
      req.on('data', (chunk: Buffer) => {
        totalSize += chunk.length;
        if (totalSize > maxFileSize) {
          reject(new Error(`Archivo demasiado grande. Máximo permitido: ${maxFileSize / (1024 * 1024)}MB`));
          return;
        }
        body = Buffer.concat([body, chunk]);
      });

      req.on('end', () => {
        try {
          const fileData = this.parseMultipartData(body, boundary);
          
          if (!fileData) {
            reject(new Error('No se encontró archivo en el request'));
            return;
          }

          // Validar tipo de archivo
          if (!this.isAllowedFileType(fileData.mimetype, fileData.originalname)) {
            reject(new Error(`Tipo de archivo no permitido: ${fileData.mimetype}`));
            return;
          }

          // Generar nombre único para el archivo
          const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(6).toString('hex');
          const ext = path.extname(fileData.originalname);
          const generatedFilename = `file-${uniqueSuffix}${ext}`;
          const filePath = path.join(this.uploadDir, generatedFilename);

          // Guardar archivo
          fs.writeFileSync(filePath, fileData.buffer);

          // Log de seguridad
          console.log(`[${new Date().toISOString()}] File uploaded: ${generatedFilename} (${fileData.buffer.length} bytes) from IP: ${req.ip}`);

          const result: FileData = {
            originalname: fileData.originalname,
            filename: generatedFilename,
            size: fileData.buffer.length,
            mimetype: fileData.mimetype,
            path: filePath,
            buffer: fileData.buffer
          };

          resolve(result);
        } catch (error) {
          reject(error);
        }
      });

      req.on('error', (error) => {
        reject(error);
      });
    });
  }

  private parseMultipartData(body: Buffer, boundary: string): { 
    originalname: string; 
    mimetype: string; 
    buffer: Buffer; 
  } | null {
    const boundaryBuffer = Buffer.from(boundary);
    const parts: Buffer[] = [];
    let start = 0;

    // Dividir por boundary
    while (true) {
      const boundaryIndex = body.indexOf(boundaryBuffer, start);
      if (boundaryIndex === -1) break;

      if (start !== 0) {
        parts.push(body.slice(start, boundaryIndex));
      }
      start = boundaryIndex + boundaryBuffer.length;
    }

    // Buscar la parte que contiene el archivo
    for (const part of parts) {
      const headerEnd = part.indexOf('\r\n\r\n');
      if (headerEnd === -1) continue;

      const headers = part.slice(0, headerEnd).toString();
      const content = part.slice(headerEnd + 4);

      // Verificar si es un archivo
      if (headers.includes('Content-Disposition: form-data') && 
          headers.includes('filename=')) {
        
        // Extraer nombre del archivo
        const filenameMatch = headers.match(/filename="([^"]+)"/);
        if (!filenameMatch) continue;

        const originalname = filenameMatch[1];

        // Extraer tipo MIME
        const mimetypeMatch = headers.match(/Content-Type: ([^\r\n]+)/);
        const mimetype = mimetypeMatch ? mimetypeMatch[1] : 'application/octet-stream';

        // Remover últimos \r\n del contenido
        let fileBuffer = content;
        if (fileBuffer.length >= 2 && 
            fileBuffer[fileBuffer.length - 2] === 0x0D && 
            fileBuffer[fileBuffer.length - 1] === 0x0A) {
          fileBuffer = fileBuffer.slice(0, -2);
        }

        return {
          originalname,
          mimetype,
          buffer: fileBuffer
        };
      }
    }

    return null;
  }

  // Método para obtener información de archivo
  getFileInfo(filename: string): FileData | null {
    const filePath = path.join(this.uploadDir, filename);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const stats = fs.statSync(filePath);
    const buffer = fs.readFileSync(filePath);

    return {
      originalname: filename,
      filename: filename,
      size: stats.size,
      mimetype: this.getMimeType(filename),
      path: filePath,
      buffer: buffer
    };
  }

  // Método para eliminar archivo
  deleteFile(filename: string): boolean {
    const filePath = path.join(this.uploadDir, filename);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    
    return false;
  }

  private getMimeType(filename: string): string {
    const ext = path.extname(filename).toLowerCase();
    const mimeTypes: { [key: string]: string } = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',

    };

    return mimeTypes[ext] || 'application/octet-stream';
  }

  // Validación de tipos de archivo permitidos
  private isAllowedFileType(mimetype: string, filename: string): boolean {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/jpg'

    ];

    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const fileExtension = path.extname(filename).toLowerCase();

    return allowedMimeTypes.includes(mimetype) && allowedExtensions.includes(fileExtension);
  }

 
}


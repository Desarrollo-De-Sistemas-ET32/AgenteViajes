import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { extname, join } from 'path';
import * as fs from 'fs/promises';
import * as path from 'path';
import { FileType } from '../enums/file-type.enum';
import { SavedFileDto } from '../dto/saved-file.dto';

@Injectable()
export class FileStorageService {
  private readonly baseUploadPath: string;
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUploadPath = this.configService.get<string>('UPLOAD_PATH', './uploads');
    this.baseUrl = this.configService.get<string>('BASE_URL', 'http://localhost:3000');
  }

  async saveFile(
    file: Express.Multer.File,
    fileType: FileType,
    category: string,
    userId?: string,
  ): Promise<SavedFileDto> {
    // Crear estructura de carpetas
    const folderStructure = this.createFolderStructure(fileType, category, userId);
    const fullPath = join(this.baseUploadPath, folderStructure);
    
    // Asegurar que existe el directorio
    await this.ensureDirectoryExists(fullPath);

    // Generar nombre único
    const uniqueFileName = this.generateUniqueFileName(file.originalname);
    const filePath = join(fullPath, uniqueFileName);

    // Guardar archivo
    await fs.writeFile(filePath, file.buffer);

    // Construir URL pública
    const publicUrl = `${this.baseUrl}/uploads/${folderStructure}/${uniqueFileName}`;

    return {
      originalName: file.originalname,
      fileName: uniqueFileName,
      filePath: filePath,
      publicUrl: publicUrl,
      size: file.size,
      mimeType: file.mimetype,
      category: category,
      fileType: fileType,
      userId: userId,
      uploadedAt: new Date(),
    };
  }

  private createFolderStructure(
    fileType: FileType,
    category: string,
    userId?: string,
  ): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    
    let structure = `${fileType}/${category}/${year}/${month}`;
    
    if (userId) {
      structure = `users/${userId}/${structure}`;
    }
    
    return structure;
  }

  private async ensureDirectoryExists(dirPath: string): Promise<void> {
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
    }
  }

  private generateUniqueFileName(originalName: string): string {
    const ext = extname(originalName);
    const name = path.basename(originalName, ext);
    const timestamp = Date.now();
    const uuid = uuidv4().split('-')[0]; // Solo los primeros 8 caracteres
    
    return `${name}_${timestamp}_${uuid}${ext}`;
  }

  async deleteFile(filePath: string): Promise<boolean> {
    try {
      await fs.unlink(filePath);
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      return false;
    }
  }
}

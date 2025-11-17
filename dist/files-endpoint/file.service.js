"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
let FileService = class FileService {
    constructor() {
        this.uploadDir = './uploads';
        if (!fs.existsSync(this.uploadDir)) {
            fs.mkdirSync(this.uploadDir, { recursive: true });
        }
    }
    async uploadFile(req) {
        return new Promise((resolve, reject) => {
            let body = Buffer.alloc(0);
            let contentType = '';
            let filename = '';
            let boundary = '';
            const maxFileSize = 50 * 1024 * 1024;
            let totalSize = 0;
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
            req.on('data', (chunk) => {
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
                    if (!this.isAllowedFileType(fileData.mimetype, fileData.originalname)) {
                        reject(new Error(`Tipo de archivo no permitido: ${fileData.mimetype}`));
                        return;
                    }
                    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(6).toString('hex');
                    const ext = path.extname(fileData.originalname);
                    const generatedFilename = `file-${uniqueSuffix}${ext}`;
                    const filePath = path.join(this.uploadDir, generatedFilename);
                    fs.writeFileSync(filePath, fileData.buffer);
                    console.log(`[${new Date().toISOString()}] File uploaded: ${generatedFilename} (${fileData.buffer.length} bytes) from IP: ${req.ip}`);
                    const result = {
                        originalname: fileData.originalname,
                        filename: generatedFilename,
                        size: fileData.buffer.length,
                        mimetype: fileData.mimetype,
                        path: filePath,
                        buffer: fileData.buffer
                    };
                    resolve(result);
                }
                catch (error) {
                    reject(error);
                }
            });
            req.on('error', (error) => {
                reject(error);
            });
        });
    }
    parseMultipartData(body, boundary) {
        const boundaryBuffer = Buffer.from(boundary);
        const parts = [];
        let start = 0;
        while (true) {
            const boundaryIndex = body.indexOf(boundaryBuffer, start);
            if (boundaryIndex === -1)
                break;
            if (start !== 0) {
                parts.push(body.slice(start, boundaryIndex));
            }
            start = boundaryIndex + boundaryBuffer.length;
        }
        for (const part of parts) {
            const headerEnd = part.indexOf('\r\n\r\n');
            if (headerEnd === -1)
                continue;
            const headers = part.slice(0, headerEnd).toString();
            const content = part.slice(headerEnd + 4);
            if (headers.includes('Content-Disposition: form-data') &&
                headers.includes('filename=')) {
                const filenameMatch = headers.match(/filename="([^"]+)"/);
                if (!filenameMatch)
                    continue;
                const originalname = filenameMatch[1];
                const mimetypeMatch = headers.match(/Content-Type: ([^\r\n]+)/);
                const mimetype = mimetypeMatch ? mimetypeMatch[1] : 'application/octet-stream';
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
    getFileInfo(filename) {
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
    deleteFile(filename) {
        const filePath = path.join(this.uploadDir, filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return true;
        }
        return false;
    }
    getMimeType(filename) {
        const ext = path.extname(filename).toLowerCase();
        const mimeTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
        };
        return mimeTypes[ext] || 'application/octet-stream';
    }
    isAllowedFileType(mimetype, filename) {
        const allowedMimeTypes = [
            'image/jpeg',
            'image/png',
            'image/jpg'
        ];
        const allowedExtensions = ['.jpg', '.jpeg', '.png'];
        const fileExtension = path.extname(filename).toLowerCase();
        return allowedMimeTypes.includes(mimetype) && allowedExtensions.includes(fileExtension);
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileService);
//# sourceMappingURL=file.service.js.map
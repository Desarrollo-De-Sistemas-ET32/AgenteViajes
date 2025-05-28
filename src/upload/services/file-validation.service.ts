// src/modules/upload/services/file-validation.service.ts (o src/upload/services/file-validation.service.ts)
import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileValidationService {
  private readonly maxImageSize: number;
  private readonly maxDocumentSize: number;
  private readonly allowedImageTypes: string[];
  private readonly allowedDocumentTypes: string[];

  constructor(private readonly configService: ConfigService) {
    this.maxImageSize = this.configService.get<number>('MAX_IMAGE_SIZE', 5 * 1024 * 1024); // 5MB
    this.maxDocumentSize = this.configService.get<number>('MAX_DOCUMENT_SIZE', 10 * 1024 * 1024); // 10MB
    this.allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    this.allowedDocumentTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  }

  validateImageFile(file: Express.Multer.File): void {
    if (!this.allowedImageTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Tipo de archivo no permitido. Tipos permitidos: ${this.allowedImageTypes.join(', ')}`
      );
    }

    if (file.size > this.maxImageSize) {
      throw new BadRequestException(
        `El archivo es demasiado grande. Tamaño máximo: ${this.maxImageSize / 1024 / 1024}MB`
      );
    }
  }

  validateDocumentFile(file: Express.Multer.File): void {
    if (!this.allowedDocumentTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Tipo de documento no permitido. Tipos permitidos: ${this.allowedDocumentTypes.join(', ')}`
      );
    }

    if (file.size > this.maxDocumentSize) {
      throw new BadRequestException(
        `El documento es demasiado grande. Tamaño máximo: ${this.maxDocumentSize / 1024 / 1024}MB`
      );
    }
  }
}
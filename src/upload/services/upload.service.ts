import { Injectable, BadRequestException } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';
import { CreateUploadDto } from '../dto/create-upload.dto';
import { UploadResponseDto } from '../dto/upload-response.dto';
import { FileType } from '../enums/file-type.enum';
import { FileValidationService } from './file-validation.service';

@Injectable()
export class UploadService {
  constructor(
    private readonly fileStorageService: FileStorageService,
    private readonly fileValidationService: FileValidationService,
  ) {}

  async uploadSingleImage(
    file: Express.Multer.File,
    category: string,
    uploadDto?: CreateUploadDto,
  ): Promise<UploadResponseDto> {
    // Validar archivo
    this.fileValidationService.validateImageFile(file);

    // Procesar y guardar archivo
    const savedFile = await this.fileStorageService.saveFile(
      file,
      FileType.IMAGE,
      category,
      uploadDto?.userId,
    );

    return {
      success: true,
      message: 'Imagen subida exitosamente',
      data: savedFile,
    };
  }

  async uploadMultipleImages(
    files: Express.Multer.File[],
    category: string,
    uploadDto?: CreateUploadDto,
  ): Promise<UploadResponseDto> {
    // Validar todos los archivos
    files.forEach(file => 
      this.fileValidationService.validateImageFile(file)
    );

    // Procesar y guardar archivos
    const savedFiles = await Promise.all(
      files.map(file =>
        this.fileStorageService.saveFile(
          file,
          FileType.IMAGE,
          category,
          uploadDto?.userId,
        ),
      ),
    );

    return {
      success: true,
      message: `${files.length} imágenes subidas exitosamente`,
      data: savedFiles,
    };
  }

  async uploadDocument(
    file: Express.Multer.File,
    category: string,
    uploadDto?: CreateUploadDto,
  ): Promise<UploadResponseDto> {
    this.fileValidationService.validateDocumentFile(file);

    const savedFile = await this.fileStorageService.saveFile(
      file,
      FileType.DOCUMENT,
      category,
      uploadDto?.userId,
    );

    return {
      success: true,
      message: 'Documento subido exitosamente',
      data: savedFile,
    };
  }
}

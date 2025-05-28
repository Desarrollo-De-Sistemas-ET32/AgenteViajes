// src/modules/upload/upload.module.ts (o src/upload/upload.module.ts)
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './controllers/upload.controller';
import { UploadService } from './services/upload.service';
import { FileStorageService } from './services/file-storage.service';
import { FileValidationService } from './services/file-validation.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService, FileStorageService, FileValidationService], // ← Asegúrate que FileValidationService esté aquí
  exports: [UploadService, FileStorageService],
})
export class UploadModule {}
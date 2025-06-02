import { Module } from '@nestjs/common';
import { UploadController } from './files-api/upload.controller';

@Module({
  controllers: [UploadController],
})
export class AppModule {}
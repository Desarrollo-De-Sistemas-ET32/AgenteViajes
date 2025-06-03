import { Module } from '@nestjs/common';
import { UploadController } from './files-endpoint/upload.controller';

@Module({
  controllers: [UploadController],
})
export class AppModule {}
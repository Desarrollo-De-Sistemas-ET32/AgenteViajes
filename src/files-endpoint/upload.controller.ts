import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  
  @Controller()
  export class UploadController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return {
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
      };
    }
  }
  
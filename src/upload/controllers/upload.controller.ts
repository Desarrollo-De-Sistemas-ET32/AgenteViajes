import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    UploadedFiles,
    BadRequestException,
    Body,
    Param,
  } from '@nestjs/common';
  import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
  import { UploadService } from '../services/upload.service';
  import { CreateUploadDto } from '../dto/create-upload.dto';
  import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
  
  @ApiTags('Upload')
  @Controller('upload')
  export class UploadController {
    constructor(private readonly uploadService: UploadService) {}
  
    @Post('image/:category?')
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(
      @UploadedFile() file: Express.Multer.File,
      @Param('category') category?: string,
      @Body() uploadDto?: CreateUploadDto,
    ) {
      if (!file) {
        throw new BadRequestException('No se ha proporcionado ningún archivo');
      }
  
      return await this.uploadService.uploadSingleImage(
        file,
        category || 'general',
        uploadDto,
      );
    }
  
    @Post('images/:category?')
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FilesInterceptor('images', 10))
    async uploadImages(
      @UploadedFiles() files: Express.Multer.File[],
      @Param('category') category?: string,
      @Body() uploadDto?: CreateUploadDto,
    ) {
      if (!files || files.length === 0) {
        throw new BadRequestException('No se han proporcionado archivos');
      }
  
      return await this.uploadService.uploadMultipleImages(
        files,
        category || 'general',
        uploadDto,
      );
    }
  
    @Post('document/:category?')
    @UseInterceptors(FileInterceptor('document'))
    async uploadDocument(
      @UploadedFile() file: Express.Multer.File,
      @Param('category') category?: string,
      @Body() uploadDto?: CreateUploadDto,
    ) {
      if (!file) {
        throw new BadRequestException('No se ha proporcionado ningún archivo');
      }
  
      return await this.uploadService.uploadDocument(
        file,
        category || 'general',
        uploadDto,
      );
    }
  }
  
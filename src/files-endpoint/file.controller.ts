import { 
  Controller, 
  Post, 
  Req, 
  Res, 
  HttpStatus, 
  BadRequestException 
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { UseGuards } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
@UseGuards(ThrottlerGuard)
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 subidas por minuto por ip
  async uploadFile(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.fileService.uploadFile(req);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}


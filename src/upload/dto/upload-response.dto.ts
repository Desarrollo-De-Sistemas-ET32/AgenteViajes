import { SavedFileDto } from './saved-file.dto';

export class UploadResponseDto {
  success: boolean;
  message: string;
  data: SavedFileDto | SavedFileDto[];
}
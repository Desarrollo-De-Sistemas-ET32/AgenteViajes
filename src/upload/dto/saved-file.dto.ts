import { FileType } from '../enums/file-type.enum';

export class SavedFileDto {
  originalName: string;
  fileName: string;
  filePath: string;
  publicUrl: string;
  size: number;
  mimeType: string;
  category: string;
  fileType: FileType;
  userId?: string;
  uploadedAt: Date;
}
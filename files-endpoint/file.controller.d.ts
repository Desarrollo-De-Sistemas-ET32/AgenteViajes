import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(file: Express.Multer.File): Promise<{
        originalname: string;
        filename: string;
        size: number;
        mimetype: string;
    }>;
}

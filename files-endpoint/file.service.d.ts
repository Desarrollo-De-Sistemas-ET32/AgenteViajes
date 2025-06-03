export declare class FileService {
    uploadFile(file: Express.Multer.File): Promise<{
        originalname: string;
        filename: string;
        size: number;
        mimetype: string;
    }>;
}

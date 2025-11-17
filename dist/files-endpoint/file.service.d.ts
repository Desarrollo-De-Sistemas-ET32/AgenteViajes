import { Request } from 'express';
interface FileData {
    originalname: string;
    filename: string;
    size: number;
    mimetype: string;
    path: string;
    buffer: Buffer;
}
export declare class FileService {
    private readonly uploadDir;
    constructor();
    uploadFile(req: Request): Promise<FileData>;
    private parseMultipartData;
    getFileInfo(filename: string): FileData | null;
    deleteFile(filename: string): boolean;
    private getMimeType;
    private isAllowedFileType;
}
export {};

import { Request, Response } from 'express';
import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(req: Request, res: Response): Promise<void>;
}

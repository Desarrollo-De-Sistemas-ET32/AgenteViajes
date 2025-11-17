import { ChatStatus } from '../../entities/chat.entity';
export declare class CreateChatDto {
    idUser?: number;
    chatTitle?: string;
    status?: ChatStatus;
}

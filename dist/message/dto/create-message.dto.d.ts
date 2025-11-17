import { MessageSender, MessageType } from '../../entities/message.entity';
export declare class CreateMessageDto {
    idChat: number;
    sender: MessageSender;
    content: string;
    messageType?: MessageType;
    metadata?: any;
    isRead?: number;
}

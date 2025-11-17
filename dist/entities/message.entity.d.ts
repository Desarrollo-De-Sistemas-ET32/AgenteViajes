import { Chat } from './chat.entity';
export declare enum MessageSender {
    USER = "user",
    BOT = "bot"
}
export declare enum MessageType {
    TEXT = "text",
    IMAGE = "image",
    FILE = "file",
    LOCATION = "location"
}
export declare class Message {
    idMessage: number;
    idChat: number;
    sender: MessageSender;
    content: string;
    messageType: MessageType;
    metadata: any;
    timestamp: Date;
    isRead: number;
    chat: Chat;
}

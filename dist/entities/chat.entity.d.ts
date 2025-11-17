import { User } from './user.entity';
import { Message } from './message.entity';
export declare enum ChatStatus {
    ACTIVE = "Active",
    CLOSED = "Closed",
    ARCHIVED = "Archived"
}
export declare class Chat {
    idChat: number;
    idUser: number;
    chatTitle: string;
    startTime: Date;
    lastActivity: Date;
    status: ChatStatus;
    user: User;
    messages: Message[];
}

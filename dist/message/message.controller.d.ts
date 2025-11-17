import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageSender, MessageType } from '../entities/message.entity';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: CreateMessageDto): Promise<import("../entities/message.entity").Message>;
    findAll(): Promise<import("../entities/message.entity").Message[]>;
    findByChat(chatId: number): Promise<import("../entities/message.entity").Message[]>;
    findUnreadByChat(chatId: number): Promise<import("../entities/message.entity").Message[]>;
    countUnreadInChat(chatId: number): Promise<{
        count: number;
    }>;
    countByChat(chatId: number): Promise<{
        count: number;
    }>;
    findRecentByChat(chatId: number, limit?: number): Promise<import("../entities/message.entity").Message[]>;
    getLastMessageByChat(chatId: number): Promise<import("../entities/message.entity").Message | null>;
    findBySender(chatId: number, sender: MessageSender): Promise<import("../entities/message.entity").Message[]>;
    countBySender(chatId: number, sender: MessageSender): Promise<{
        count: number;
    }>;
    findByType(chatId: number, messageType: MessageType): Promise<import("../entities/message.entity").Message[]>;
    countByType(chatId: number, messageType: MessageType): Promise<{
        count: number;
    }>;
    findOne(id: number): Promise<import("../entities/message.entity").Message>;
    update(id: number, updateMessageDto: UpdateMessageDto): Promise<import("../entities/message.entity").Message>;
    markAsRead(id: number): Promise<import("../entities/message.entity").Message>;
    markAllAsReadInChat(chatId: number): Promise<void>;
    remove(id: number): Promise<void>;
    removeAllByChat(chatId: number): Promise<void>;
}

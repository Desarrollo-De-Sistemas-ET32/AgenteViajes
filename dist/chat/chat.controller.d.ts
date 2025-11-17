import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ChatStatus } from '../entities/chat.entity';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    create(createChatDto: CreateChatDto): Promise<import("../entities/chat.entity").Chat>;
    findAll(): Promise<import("../entities/chat.entity").Chat[]>;
    findByUser(userId: number): Promise<import("../entities/chat.entity").Chat[]>;
    findActiveByUser(userId: number): Promise<import("../entities/chat.entity").Chat[]>;
    findRecentByUser(userId: number, limit?: number): Promise<import("../entities/chat.entity").Chat[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    countActiveByUser(userId: number): Promise<{
        count: number;
    }>;
    findByStatus(status: ChatStatus): Promise<import("../entities/chat.entity").Chat[]>;
    countByStatus(status: ChatStatus): Promise<{
        count: number;
    }>;
    findOne(id: number): Promise<import("../entities/chat.entity").Chat>;
    update(id: number, updateChatDto: UpdateChatDto): Promise<import("../entities/chat.entity").Chat>;
    updateStatus(id: number, body: {
        status: ChatStatus;
    }): Promise<import("../entities/chat.entity").Chat>;
    archiveChat(id: number): Promise<import("../entities/chat.entity").Chat>;
    closeChat(id: number): Promise<import("../entities/chat.entity").Chat>;
    reopenChat(id: number): Promise<import("../entities/chat.entity").Chat>;
    remove(id: number): Promise<void>;
}

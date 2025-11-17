import { Repository } from 'typeorm';
import { Chat, ChatStatus } from '../entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
export declare class ChatService {
    private readonly chatRepository;
    constructor(chatRepository: Repository<Chat>);
    create(createChatDto: CreateChatDto): Promise<Chat>;
    findAll(): Promise<Chat[]>;
    findOne(id: number): Promise<Chat>;
    findByUser(userId: number): Promise<Chat[]>;
    findActiveByUser(userId: number): Promise<Chat[]>;
    findByStatus(status: ChatStatus): Promise<Chat[]>;
    findRecentByUser(userId: number, limit?: number): Promise<Chat[]>;
    update(id: number, updateChatDto: UpdateChatDto): Promise<Chat>;
    updateStatus(id: number, status: ChatStatus): Promise<Chat>;
    remove(id: number): Promise<void>;
    archiveChat(id: number): Promise<Chat>;
    closeChat(id: number): Promise<Chat>;
    reopenChat(id: number): Promise<Chat>;
    countByUser(userId: number): Promise<number>;
    countByStatus(status: ChatStatus): Promise<number>;
    countActiveByUser(userId: number): Promise<number>;
}

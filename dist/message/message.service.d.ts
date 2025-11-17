import { Repository } from 'typeorm';
import { Message, MessageSender, MessageType } from '../entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    findByChat(chatId: number): Promise<Message[]>;
    findUnreadByChat(chatId: number): Promise<Message[]>;
    findBySender(chatId: number, sender: MessageSender): Promise<Message[]>;
    findByType(chatId: number, messageType: MessageType): Promise<Message[]>;
    findRecentByChat(chatId: number, limit?: number): Promise<Message[]>;
    update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message>;
    markAsRead(id: number): Promise<Message>;
    markAllAsReadInChat(chatId: number): Promise<void>;
    remove(id: number): Promise<void>;
    removeAllByChat(chatId: number): Promise<void>;
    countUnreadInChat(chatId: number): Promise<number>;
    countByChat(chatId: number): Promise<number>;
    countBySender(chatId: number, sender: MessageSender): Promise<number>;
    countByType(chatId: number, messageType: MessageType): Promise<number>;
    getLastMessageByChat(chatId: number): Promise<Message | null>;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message, MessageSender, MessageType } from '../entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = this.messageRepository.create(createMessageDto);
    return await this.messageRepository.save(message);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find({
      relations: ['chat'],
      order: { timestamp: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Message> {
    const message = await this.messageRepository.findOne({
      where: { idMessage: id },
      relations: ['chat'],
    });

    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }

    return message;
  }

  async findByChat(chatId: number): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { idChat: chatId },
      order: { timestamp: 'ASC' },
    });
  }

  async findUnreadByChat(chatId: number): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { idChat: chatId, isRead: 0 },
      order: { timestamp: 'ASC' },
    });
  }

  async findBySender(chatId: number, sender: MessageSender): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { idChat: chatId, sender },
      order: { timestamp: 'ASC' },
    });
  }

  async findByType(chatId: number, messageType: MessageType): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { idChat: chatId, messageType },
      order: { timestamp: 'ASC' },
    });
  }

  async findRecentByChat(chatId: number, limit: number = 50): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { idChat: chatId },
      order: { timestamp: 'DESC' },
      take: limit,
    });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message> {
    const message = await this.findOne(id);
    
    Object.assign(message, updateMessageDto);
    return await this.messageRepository.save(message);
  }

  async markAsRead(id: number): Promise<Message> {
    const message = await this.findOne(id);
    message.isRead = 1;
    return await this.messageRepository.save(message);
  }

  async markAllAsReadInChat(chatId: number): Promise<void> {
    await this.messageRepository.update(
      { idChat: chatId, isRead: 0 },
      { isRead: 1 }
    );
  }

  async remove(id: number): Promise<void> {
    const message = await this.findOne(id);
    await this.messageRepository.remove(message);
  }

  async removeAllByChat(chatId: number): Promise<void> {
    const messages = await this.findByChat(chatId);
    if (messages.length > 0) {
      await this.messageRepository.remove(messages);
    }
  }

  async countUnreadInChat(chatId: number): Promise<number> {
    return await this.messageRepository.count({
      where: { idChat: chatId, isRead: 0 },
    });
  }

  async countByChat(chatId: number): Promise<number> {
    return await this.messageRepository.count({
      where: { idChat: chatId },
    });
  }

  async countBySender(chatId: number, sender: MessageSender): Promise<number> {
    return await this.messageRepository.count({
      where: { idChat: chatId, sender },
    });
  }

  async countByType(chatId: number, messageType: MessageType): Promise<number> {
    return await this.messageRepository.count({
      where: { idChat: chatId, messageType },
    });
  }

  async getLastMessageByChat(chatId: number): Promise<Message | null> {
    const message = await this.messageRepository.findOne({
      where: { idChat: chatId },
      order: { timestamp: 'DESC' },
    });

    return message || null;
  }
}
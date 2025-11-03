import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat, ChatStatus } from '../entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const chat = this.chatRepository.create(createChatDto);
    return await this.chatRepository.save(chat);
  }

  async findAll(): Promise<Chat[]> {
    return await this.chatRepository.find({
      relations: ['user', 'messages'],
      order: { lastActivity: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Chat> {
    const chat = await this.chatRepository.findOne({
      where: { idChat: id },
      relations: ['user', 'messages'],
    });

    if (!chat) {
      throw new NotFoundException(`Chat with ID ${id} not found`);
    }

    return chat;
  }

  async findByUser(userId: number): Promise<Chat[]> {
    return await this.chatRepository.find({
      where: { idUser: userId },
      relations: ['messages'],
      order: { lastActivity: 'DESC' },
    });
  }

  async findActiveByUser(userId: number): Promise<Chat[]> {
    return await this.chatRepository.find({
      where: { idUser: userId, status: ChatStatus.ACTIVE },
      relations: ['messages'],
      order: { lastActivity: 'DESC' },
    });
  }

  async findByStatus(status: ChatStatus): Promise<Chat[]> {
    return await this.chatRepository.find({
      where: { status },
      relations: ['user'],
      order: { lastActivity: 'DESC' },
    });
  }

  async findRecentByUser(userId: number, limit: number = 10): Promise<Chat[]> {
    return await this.chatRepository.find({
      where: { idUser: userId },
      relations: ['messages'],
      order: { lastActivity: 'DESC' },
      take: limit,
    });
  }

  async update(id: number, updateChatDto: UpdateChatDto): Promise<Chat> {
    const chat = await this.findOne(id);
    
    Object.assign(chat, updateChatDto);
    return await this.chatRepository.save(chat);
  }

  async updateStatus(id: number, status: ChatStatus): Promise<Chat> {
    const chat = await this.findOne(id);
    chat.status = status;
    return await this.chatRepository.save(chat);
  }

  async remove(id: number): Promise<void> {
    const chat = await this.findOne(id);
    await this.chatRepository.remove(chat);
  }

  async archiveChat(id: number): Promise<Chat> {
    return await this.updateStatus(id, ChatStatus.ARCHIVED);
  }

  async closeChat(id: number): Promise<Chat> {
    return await this.updateStatus(id, ChatStatus.CLOSED);
  }

  async reopenChat(id: number): Promise<Chat> {
    return await this.updateStatus(id, ChatStatus.ACTIVE);
  }

  async countByUser(userId: number): Promise<number> {
    return await this.chatRepository.count({
      where: { idUser: userId },
    });
  }

  async countByStatus(status: ChatStatus): Promise<number> {
    return await this.chatRepository.count({
      where: { status },
    });
  }

  async countActiveByUser(userId: number): Promise<number> {
    return await this.chatRepository.count({
      where: { idUser: userId, status: ChatStatus.ACTIVE },
    });
  }
}
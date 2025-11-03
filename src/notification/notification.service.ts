import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification, NotificationType, RelatedEntityType } from '../entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const notification = this.notificationRepository.create(createNotificationDto);
    return await this.notificationRepository.save(notification);
  }

  async findAll(): Promise<Notification[]> {
    return await this.notificationRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Notification> {
    const notification = await this.notificationRepository.findOne({
      where: { idNotification: id },
      relations: ['user'],
    });

    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }

    return notification;
  }

  async findByUser(userId: number): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { idUser: userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findUnreadByUser(userId: number): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { idUser: userId, isRead: 0 },
      order: { createdAt: 'DESC' },
    });
  }

  async findByType(userId: number, type: NotificationType): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { idUser: userId, type },
      order: { createdAt: 'DESC' },
    });
  }

  async findByRelatedEntity(
    userId: number,
    relatedEntityType: RelatedEntityType,
    relatedEntityId: number,
  ): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { idUser: userId, relatedEntityType, relatedEntityId },
      order: { createdAt: 'DESC' },
    });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    const notification = await this.findOne(id);
    
    Object.assign(notification, updateNotificationDto);
    return await this.notificationRepository.save(notification);
  }

  async markAsRead(id: number): Promise<Notification> {
    const notification = await this.findOne(id);
    notification.isRead = 1;
    return await this.notificationRepository.save(notification);
  }

  async markAllAsReadByUser(userId: number): Promise<void> {
    await this.notificationRepository.update(
      { idUser: userId, isRead: 0 },
      { isRead: 1 }
    );
  }

  async remove(id: number): Promise<void> {
    const notification = await this.findOne(id);
    await this.notificationRepository.remove(notification);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const notifications = await this.findByUser(userId);
    if (notifications.length > 0) {
      await this.notificationRepository.remove(notifications);
    }
  }

  async countUnreadByUser(userId: number): Promise<number> {
    return await this.notificationRepository.count({
      where: { idUser: userId, isRead: 0 },
    });
  }

  async getRecentByUser(userId: number, limit: number = 10): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { idUser: userId },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async countByType(userId: number, type: NotificationType): Promise<number> {
    return await this.notificationRepository.count({
      where: { idUser: userId, type },
    });
  }

  async countByUser(userId: number): Promise<number> {
    return await this.notificationRepository.count({
      where: { idUser: userId },
    });
  }
}
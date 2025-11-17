import { Repository } from 'typeorm';
import { Notification, NotificationType, RelatedEntityType } from '../entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationService {
    private readonly notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
    create(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    findOne(id: number): Promise<Notification>;
    findByUser(userId: number): Promise<Notification[]>;
    findUnreadByUser(userId: number): Promise<Notification[]>;
    findByType(userId: number, type: NotificationType): Promise<Notification[]>;
    findByRelatedEntity(userId: number, relatedEntityType: RelatedEntityType, relatedEntityId: number): Promise<Notification[]>;
    update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification>;
    markAsRead(id: number): Promise<Notification>;
    markAllAsReadByUser(userId: number): Promise<void>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    countUnreadByUser(userId: number): Promise<number>;
    getRecentByUser(userId: number, limit?: number): Promise<Notification[]>;
    countByType(userId: number, type: NotificationType): Promise<number>;
    countByUser(userId: number): Promise<number>;
}

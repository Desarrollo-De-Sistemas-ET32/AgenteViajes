import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationType, RelatedEntityType } from '../entities/notification.entity';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    create(createNotificationDto: CreateNotificationDto): Promise<import("../entities/notification.entity").Notification>;
    findAll(): Promise<import("../entities/notification.entity").Notification[]>;
    findByUser(userId: number): Promise<import("../entities/notification.entity").Notification[]>;
    findUnreadByUser(userId: number): Promise<import("../entities/notification.entity").Notification[]>;
    countUnreadByUser(userId: number): Promise<{
        count: number;
    }>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    getRecentByUser(userId: number, limit?: number): Promise<import("../entities/notification.entity").Notification[]>;
    findByType(userId: number, type: NotificationType): Promise<import("../entities/notification.entity").Notification[]>;
    countByType(userId: number, type: NotificationType): Promise<{
        count: number;
    }>;
    findByRelatedEntity(userId: number, entityType: RelatedEntityType, entityId: number): Promise<import("../entities/notification.entity").Notification[]>;
    findOne(id: number): Promise<import("../entities/notification.entity").Notification>;
    update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<import("../entities/notification.entity").Notification>;
    markAsRead(id: number): Promise<import("../entities/notification.entity").Notification>;
    markAllAsReadByUser(userId: number): Promise<void>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
}

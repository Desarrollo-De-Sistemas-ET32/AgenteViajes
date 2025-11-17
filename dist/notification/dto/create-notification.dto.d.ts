import { NotificationType, RelatedEntityType } from '../../entities/notification.entity';
export declare class CreateNotificationDto {
    idUser: number;
    title: string;
    message: string;
    type?: NotificationType;
    isRead?: number;
    relatedEntityType?: RelatedEntityType;
    relatedEntityId?: number;
}

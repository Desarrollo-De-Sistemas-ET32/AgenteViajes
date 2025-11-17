import { User } from './user.entity';
export declare enum NotificationType {
    INFO = "Info",
    WARNING = "Warning",
    SUCCESS = "Success",
    ERROR = "Error"
}
export declare enum RelatedEntityType {
    TRAVEL = "Travel",
    FLIGHT = "Flight",
    HOTEL = "Hotel",
    ACTIVITY = "Activity",
    PAYMENT = "Payment"
}
export declare class Notification {
    idNotification: number;
    idUser: number;
    title: string;
    message: string;
    type: NotificationType;
    isRead: number;
    relatedEntityType: RelatedEntityType;
    relatedEntityId: number;
    createdAt: Date;
    user: User;
}

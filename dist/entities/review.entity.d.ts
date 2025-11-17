import { User } from './user.entity';
export declare enum ReviewEntityType {
    HOTEL = "Hotel",
    ACTIVITY = "Activity",
    CITY = "City",
    TRAVEL = "Travel"
}
export declare class Review {
    idReview: number;
    idUser: number;
    entityType: ReviewEntityType;
    entityId: number;
    rating: number;
    reviewText: string;
    createdAt: Date;
    user: User;
}

import { User } from './user.entity';
export declare enum EntityType {
    HOTEL = "Hotel",
    ACTIVITY = "Activity",
    DESTINATION = "Destination",
    TRAVEL = "Travel"
}
export declare class Favorite {
    idFavorite: number;
    idUser: number;
    entityType: EntityType;
    entityId: number;
    addedAt: Date;
    user: User;
}

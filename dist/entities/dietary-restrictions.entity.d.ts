import { User } from './user.entity';
export declare enum RestrictionType {
    VEGETARIAN = "Vegetariano",
    VEGAN = "Vegano",
    GLUTEN_FREE = "Sin gluten",
    FOOD_ALLERGIES = "Al\u00E9rgico alimentarios"
}
export declare class DietaryRestriction {
    idRestriction: number;
    idUser: number;
    restrictionType: RestrictionType;
    details: string;
    user: User;
}

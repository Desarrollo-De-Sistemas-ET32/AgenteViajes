import { RestrictionType } from '../../entities/dietary-restrictions.entity';
export declare class CreateDietaryRestrictionDto {
    idUser: number;
    restrictionType: RestrictionType;
    details?: string;
}

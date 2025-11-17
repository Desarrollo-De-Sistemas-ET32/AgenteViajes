import { DietaryRestrictionsService } from './dietary-restrictions.service';
import { CreateDietaryRestrictionDto } from './dto/create-dietary-restrictions.dto';
import { UpdateDietaryRestrictionDto } from './dto/update-dietary-restrictions.dto';
import { RestrictionType } from '../entities/dietary-restrictions.entity';
export declare class DietaryRestrictionsController {
    private readonly dietaryRestrictionsService;
    constructor(dietaryRestrictionsService: DietaryRestrictionsService);
    create(createDietaryRestrictionDto: CreateDietaryRestrictionDto): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction>;
    findAll(): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction[]>;
    findByUser(userId: number): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    getUserRestrictionTypes(userId: number): Promise<RestrictionType[]>;
    findByUserAndType(userId: number, restrictionType: RestrictionType): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction[]>;
    hasRestriction(userId: number, restrictionType: RestrictionType): Promise<{
        hasRestriction: boolean;
    }>;
    findByType(restrictionType: RestrictionType): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction[]>;
    countByType(restrictionType: RestrictionType): Promise<{
        count: number;
    }>;
    findOne(id: number): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction>;
    update(id: number, updateDietaryRestrictionDto: UpdateDietaryRestrictionDto): Promise<import("../entities/dietary-restrictions.entity").DietaryRestriction>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
}

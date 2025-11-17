import { Repository } from 'typeorm';
import { DietaryRestriction, RestrictionType } from '../entities/dietary-restrictions.entity';
import { CreateDietaryRestrictionDto } from './dto/create-dietary-restrictions.dto';
import { UpdateDietaryRestrictionDto } from './dto/update-dietary-restrictions.dto';
export declare class DietaryRestrictionsService {
    private readonly dietaryRestrictionRepository;
    constructor(dietaryRestrictionRepository: Repository<DietaryRestriction>);
    create(createDietaryRestrictionDto: CreateDietaryRestrictionDto): Promise<DietaryRestriction>;
    findAll(): Promise<DietaryRestriction[]>;
    findOne(id: number): Promise<DietaryRestriction>;
    findByUser(userId: number): Promise<DietaryRestriction[]>;
    findByType(restrictionType: RestrictionType): Promise<DietaryRestriction[]>;
    findByUserAndType(userId: number, restrictionType: RestrictionType): Promise<DietaryRestriction[]>;
    update(id: number, updateDietaryRestrictionDto: UpdateDietaryRestrictionDto): Promise<DietaryRestriction>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    countByUser(userId: number): Promise<number>;
    countByType(restrictionType: RestrictionType): Promise<number>;
    hasRestriction(userId: number, restrictionType: RestrictionType): Promise<boolean>;
    getUserRestrictionTypes(userId: number): Promise<RestrictionType[]>;
}

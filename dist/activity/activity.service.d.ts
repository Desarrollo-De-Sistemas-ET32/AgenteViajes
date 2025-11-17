import { Repository } from 'typeorm';
import { Activity, ActivityCategory } from '../entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivityService {
    private activityRepository;
    constructor(activityRepository: Repository<Activity>);
    create(createActivityDto: CreateActivityDto): Promise<Activity>;
    findAll(): Promise<Activity[]>;
    findOne(id: number): Promise<Activity>;
    findWithTravels(id: number): Promise<Activity>;
    findByCity(cityId: number): Promise<Activity[]>;
    findByCategory(category: ActivityCategory): Promise<Activity[]>;
    findByCategoryAndCity(category: ActivityCategory, cityId: number): Promise<Activity[]>;
    findByMinRating(minRating: number): Promise<Activity[]>;
    findByCostRange(minCost: number, maxCost: number): Promise<Activity[]>;
    searchByName(searchTerm: string): Promise<Activity[]>;
    findTopRated(limit?: number): Promise<Activity[]>;
    countByCategory(category: ActivityCategory): Promise<number>;
    countByCity(cityId: number): Promise<number>;
    getAverageRating(): Promise<number>;
    getAverageRatingByCity(cityId: number): Promise<number>;
    getAverageCost(): Promise<number>;
    update(id: number, updateActivityDto: UpdateActivityDto): Promise<Activity>;
    updateRating(id: number, rating: number): Promise<Activity>;
    remove(id: number): Promise<void>;
}

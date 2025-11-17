import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityCategory } from '../entities/activity.entity';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    create(createActivityDto: CreateActivityDto): Promise<import("../entities/activity.entity").Activity>;
    findAll(): Promise<import("../entities/activity.entity").Activity[]>;
    findTopRated(limit?: number): Promise<import("../entities/activity.entity").Activity[]>;
    searchByName(searchTerm: string): Promise<import("../entities/activity.entity").Activity[]>;
    findByCity(cityId: number): Promise<import("../entities/activity.entity").Activity[]>;
    countByCity(cityId: number): Promise<number>;
    getAverageRatingByCity(cityId: number): Promise<number>;
    findByCategory(category: ActivityCategory): Promise<import("../entities/activity.entity").Activity[]>;
    countByCategory(category: ActivityCategory): Promise<number>;
    findByCategoryAndCity(category: ActivityCategory, cityId: number): Promise<import("../entities/activity.entity").Activity[]>;
    findByMinRating(minRating: number): Promise<import("../entities/activity.entity").Activity[]>;
    findByCostRange(minCost: number, maxCost: number): Promise<import("../entities/activity.entity").Activity[]>;
    getAverageRating(): Promise<number>;
    getAverageCost(): Promise<number>;
    findOne(id: number): Promise<import("../entities/activity.entity").Activity>;
    findWithTravels(id: number): Promise<import("../entities/activity.entity").Activity>;
    update(id: number, updateActivityDto: UpdateActivityDto): Promise<import("../entities/activity.entity").Activity>;
    updateRating(id: number, rating: number): Promise<import("../entities/activity.entity").Activity>;
    remove(id: number): Promise<void>;
}

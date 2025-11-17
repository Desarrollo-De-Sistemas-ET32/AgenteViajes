import { UserTravelInterestsService } from './user-travel-interests.service';
import { CreateUserTravelInterestDto } from './dto/create-user-travel-interests.dto';
import { UpdateUserTravelInterestDto } from './dto/update-user-travel-interests.dto';
import { InterestCategory } from '../entities/user-travel-interests.entity';
export declare class UserTravelInterestsController {
    private readonly userTravelInterestsService;
    constructor(userTravelInterestsService: UserTravelInterestsService);
    create(createUserTravelInterestDto: CreateUserTravelInterestDto): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest>;
    findAll(): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest[]>;
    findByUser(userId: number): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    getUserInterestCategories(userId: number): Promise<InterestCategory[]>;
    findTopPrioritiesByUser(userId: number, limit?: number): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest[]>;
    getAveragePriorityByUser(userId: number): Promise<{
        average: number;
    }>;
    findByPriority(userId: number, priority: number): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest[]>;
    findByUserAndCategory(userId: number, interestCategory: InterestCategory): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest[]>;
    hasInterest(userId: number, interestCategory: InterestCategory): Promise<{
        hasInterest: boolean;
    }>;
    findByCategory(interestCategory: InterestCategory): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest[]>;
    countByCategory(interestCategory: InterestCategory): Promise<{
        count: number;
    }>;
    findOne(id: number): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest>;
    update(id: number, updateUserTravelInterestDto: UpdateUserTravelInterestDto): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest>;
    updatePriority(id: number, body: {
        priority: number;
    }): Promise<import("../entities/user-travel-interests.entity").UserTravelInterest>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
}

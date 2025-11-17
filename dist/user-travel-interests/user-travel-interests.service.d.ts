import { Repository } from 'typeorm';
import { UserTravelInterest, InterestCategory } from '../entities/user-travel-interests.entity';
import { CreateUserTravelInterestDto } from './dto/create-user-travel-interests.dto';
import { UpdateUserTravelInterestDto } from './dto/update-user-travel-interests.dto';
export declare class UserTravelInterestsService {
    private readonly userTravelInterestRepository;
    constructor(userTravelInterestRepository: Repository<UserTravelInterest>);
    create(createUserTravelInterestDto: CreateUserTravelInterestDto): Promise<UserTravelInterest>;
    findAll(): Promise<UserTravelInterest[]>;
    findOne(id: number): Promise<UserTravelInterest>;
    findByUser(userId: number): Promise<UserTravelInterest[]>;
    findByCategory(interestCategory: InterestCategory): Promise<UserTravelInterest[]>;
    findByUserAndCategory(userId: number, interestCategory: InterestCategory): Promise<UserTravelInterest[]>;
    findByPriority(userId: number, priority: number): Promise<UserTravelInterest[]>;
    findTopPrioritiesByUser(userId: number, limit?: number): Promise<UserTravelInterest[]>;
    update(id: number, updateUserTravelInterestDto: UpdateUserTravelInterestDto): Promise<UserTravelInterest>;
    updatePriority(id: number, priority: number): Promise<UserTravelInterest>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    countByUser(userId: number): Promise<number>;
    countByCategory(interestCategory: InterestCategory): Promise<number>;
    hasInterest(userId: number, interestCategory: InterestCategory): Promise<boolean>;
    getUserInterestCategories(userId: number): Promise<InterestCategory[]>;
    getAveragePriorityByUser(userId: number): Promise<number>;
}

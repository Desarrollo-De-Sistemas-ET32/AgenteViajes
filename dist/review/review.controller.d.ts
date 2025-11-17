import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntityType } from '../entities/review.entity';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(createReviewDto: CreateReviewDto): Promise<import("../entities/review.entity").Review>;
    findAll(): Promise<import("../entities/review.entity").Review[]>;
    getRecentReviews(limit?: number): Promise<import("../entities/review.entity").Review[]>;
    findByUser(userId: number): Promise<import("../entities/review.entity").Review[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    getAverageRatingByUser(userId: number): Promise<{
        average: number;
    }>;
    findByEntity(entityType: ReviewEntityType, entityId: number): Promise<import("../entities/review.entity").Review[]>;
    countByEntity(entityType: ReviewEntityType, entityId: number): Promise<{
        count: number;
    }>;
    getAverageRatingByEntity(entityType: ReviewEntityType, entityId: number): Promise<{
        average: number;
    }>;
    findTopRatedByEntity(entityType: ReviewEntityType, entityId: number, limit?: number): Promise<import("../entities/review.entity").Review[]>;
    findByEntityType(entityType: ReviewEntityType): Promise<import("../entities/review.entity").Review[]>;
    findByMinRating(rating: number): Promise<import("../entities/review.entity").Review[]>;
    hasUserReviewedEntity(userId: number, entityType: ReviewEntityType, entityId: number): Promise<{
        hasReviewed: boolean;
    }>;
    findOne(id: number): Promise<import("../entities/review.entity").Review>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<import("../entities/review.entity").Review>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    removeAllByEntity(entityType: ReviewEntityType, entityId: number): Promise<void>;
}

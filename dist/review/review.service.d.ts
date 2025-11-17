import { Repository } from 'typeorm';
import { Review, ReviewEntityType } from '../entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewService {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewDto: CreateReviewDto): Promise<Review>;
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    findByUser(userId: number): Promise<Review[]>;
    findByEntity(entityType: ReviewEntityType, entityId: number): Promise<Review[]>;
    findByEntityType(entityType: ReviewEntityType): Promise<Review[]>;
    findByMinRating(rating: number): Promise<Review[]>;
    findTopRatedByEntity(entityType: ReviewEntityType, entityId: number, limit?: number): Promise<Review[]>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    removeAllByEntity(entityType: ReviewEntityType, entityId: number): Promise<void>;
    countByUser(userId: number): Promise<number>;
    countByEntity(entityType: ReviewEntityType, entityId: number): Promise<number>;
    getAverageRatingByEntity(entityType: ReviewEntityType, entityId: number): Promise<number>;
    getAverageRatingByUser(userId: number): Promise<number>;
    hasUserReviewedEntity(userId: number, entityType: ReviewEntityType, entityId: number): Promise<boolean>;
    getRecentReviews(limit?: number): Promise<Review[]>;
}

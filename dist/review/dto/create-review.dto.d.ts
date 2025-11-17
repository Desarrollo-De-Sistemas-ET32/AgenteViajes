import { ReviewEntityType } from '../../entities/review.entity';
export declare class CreateReviewDto {
    idUser: number;
    entityType: ReviewEntityType;
    entityId: number;
    rating: number;
    reviewText?: string;
}

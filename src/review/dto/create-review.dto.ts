import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, Min } from 'class-validator';
import { ReviewEntityType } from '../../entities/review.entity';

export class CreateReviewDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsEnum(ReviewEntityType)
  @IsNotEmpty()
  entityType: ReviewEntityType;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  entityId: number;

  @IsNumber()
  @Min(0.0)
  @Max(5.0)
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsOptional()
  reviewText?: string;
}
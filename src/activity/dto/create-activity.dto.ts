import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, Max } from 'class-validator';
import { ActivityCategory } from '../../entities/activity.entity';

export class CreateActivityDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  activityName: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsOptional()
  cost?: number;

  @IsString()
  @MaxLength(45)
  @IsOptional()
  duration?: string;

  @IsEnum(ActivityCategory)
  @IsOptional()
  category?: ActivityCategory;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  mediaPath?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0.0)
  @Max(5.0)
  @IsOptional()
  rating?: number;
}
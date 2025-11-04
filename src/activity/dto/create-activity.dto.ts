import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsEnum,
  IsNumber,
  MaxLength,
  Min,
  Max,
} from 'class-validator';
import { ActivityCategory } from '../../entities/activity.entity';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  activityName: string;

  @IsInt()
  @IsNotEmpty()
  cityId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  cost?: number;

  @IsString()
  @IsOptional()
  @MaxLength(45)
  duration?: string;

  @IsEnum(ActivityCategory)
  @IsOptional()
  category?: ActivityCategory;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  mediaPath?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  @Min(0.0)
  @Max(5.0)
  rating?: number;
}
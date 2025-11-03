import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsEnum,
  IsDateString,
  IsDecimal,
  MaxLength,
} from 'class-validator';
import { TravelStatus, TravelStyle, AccommodationType } from '../../entities/travel.entity';

export class CreateTravelDto {
  @IsInt()
  @IsOptional()
  userId?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  travelName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  destination: string;

  @IsDateString()
  @IsOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;

  @IsDecimal()
  @IsOptional()
  totalCost?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  documentPath?: string;

  @IsEnum(TravelStatus)
  @IsOptional()
  status?: TravelStatus;

  @IsEnum(TravelStyle)
  @IsOptional()
  travelStyle?: TravelStyle;

  @IsEnum(AccommodationType)
  @IsOptional()
  accommodationType?: AccommodationType;
}
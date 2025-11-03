import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  Min,
} from 'class-validator';

export class CreateTravelHasActivityDto {
  @IsInt()
  @IsNotEmpty()
  travelId: number;

  @IsInt()
  @IsNotEmpty()
  activityId: number;

  @IsDateString()
  @IsOptional()
  scheduledDate?: Date;

  @IsInt()
  @IsOptional()
  @Min(1)
  numberOfParticipants?: number;

  @IsString()
  @IsOptional()
  specialRequirements?: string;
}
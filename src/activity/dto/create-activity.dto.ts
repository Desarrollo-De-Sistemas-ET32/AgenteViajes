import { IsString, IsNumber, IsOptional, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  activityName: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsString()
  @IsOptional()
  mediaPath?: string;
}

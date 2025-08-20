import { IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreateTravelDto {
  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @IsDate()
  endTime?: Date;

  @IsOptional()
  @IsNumber()
  totalCost?: number;
}

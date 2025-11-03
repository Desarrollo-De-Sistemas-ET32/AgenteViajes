import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, Min, Max } from 'class-validator';
import { InterestCategory } from '../../entities/user-travel-interests.entity';

export class CreateUserTravelInterestDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsEnum(InterestCategory)
  @IsNotEmpty()
  interestCategory: InterestCategory;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsOptional()
  priority?: number;
}
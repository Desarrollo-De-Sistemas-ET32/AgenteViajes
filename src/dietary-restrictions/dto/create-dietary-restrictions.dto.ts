import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';
import { RestrictionType } from '../../entities/dietary-restrictions.entity';

export class CreateDietaryRestrictionDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsEnum(RestrictionType)
  @IsNotEmpty()
  restrictionType: RestrictionType;

  @IsString()
  @IsOptional()
  details?: string;
}
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';
import { RequirementType } from '../../entities/accessibility-requirements.entity';

export class CreateAccessibilityRequirementDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsEnum(RequirementType)
  @IsNotEmpty()
  requirementType: RequirementType;

  @IsString()
  @IsOptional()
  details?: string;
}
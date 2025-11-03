import { PartialType } from '@nestjs/mapped-types';
import { CreateDietaryRestrictionDto } from './create-dietary-restrictions.dto';

export class UpdateDietaryRestrictionDto extends PartialType(CreateDietaryRestrictionDto) {}
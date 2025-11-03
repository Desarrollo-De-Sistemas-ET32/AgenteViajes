import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelCompanionDto } from './create-travel-companion.dto';

export class UpdateTravelCompanionDto extends PartialType(CreateTravelCompanionDto) {}
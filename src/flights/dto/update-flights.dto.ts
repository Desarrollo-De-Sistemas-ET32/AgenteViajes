import { PartialType } from '@nestjs/mapped-types';
import { CreateFlightDto } from './create-flights.dto';

export class UpdateFlightDto extends PartialType(CreateFlightDto) {}

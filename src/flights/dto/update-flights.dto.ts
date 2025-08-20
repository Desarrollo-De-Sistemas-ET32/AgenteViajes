import { PartialType } from '@nestjs/mapped-types';
import { CreateFlightsDto } from './create-flights.dto';

export class UpdateFlightsDto extends PartialType(CreateFlightsDto) {}
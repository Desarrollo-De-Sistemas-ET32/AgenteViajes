import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelHasFlightDto } from './create-travel-has-flight.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateTravelHasFlightDto extends PartialType(
  OmitType(CreateTravelHasFlightDto, ['travelIdTravel', 'flightIdFlight'] as const)
) {}
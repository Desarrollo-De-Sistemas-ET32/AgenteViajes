import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { FlightType } from '../../entities/travel-has-flight.entity';

export class CreateTravelHasFlightDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  travelIdTravel: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  flightIdFlight: number;

  @IsEnum(FlightType)
  @IsOptional()
  flightType?: FlightType;
}
import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelHasHotelDto } from './create-travel-has-hotel.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateTravelHasHotelDto extends PartialType(
  OmitType(CreateTravelHasHotelDto, ['travelIdTravel', 'hotelIdHotel'] as const)
) {}
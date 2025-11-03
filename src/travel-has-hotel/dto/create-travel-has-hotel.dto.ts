import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength, Min } from 'class-validator';

export class CreateTravelHasHotelDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  travelIdTravel: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  hotelIdHotel: number;

  @IsDateString()
  @IsOptional()
  checkInDate?: Date;

  @IsDateString()
  @IsOptional()
  checkOutDate?: Date;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  roomType?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  numberOfRooms?: number;
}
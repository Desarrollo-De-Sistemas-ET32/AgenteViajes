import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateFlightsDto {
  @IsString()
  airline: string;

  @IsString()
  origin: string;

  @IsString()
  destination: string;

  @IsDate()
  departureDate: Date;

  @IsDate()
  arrivalDate: Date;

  @IsNumber()
  price: number;
}
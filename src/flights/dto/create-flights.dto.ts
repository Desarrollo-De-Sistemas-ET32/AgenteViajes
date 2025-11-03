import { IsEnum, IsInt, IsOptional, IsPositive, IsString, MaxLength, IsDateString, IsDecimal, IsNumber } from 'class-validator';
import { FlightClass, FlightStatus } from '../../entities/flights.entity';
import { Type } from 'class-transformer';

export class CreateFlightDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  idUser?: number;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  flightNumber?: string;

  @IsString()
  @MaxLength(45)
  @IsOptional()
  airline?: string;

  @IsString()
  @MaxLength(45)
  @IsOptional()
  origin?: string;

  @IsString()
  @MaxLength(45)
  @IsOptional()
  destination?: string;

  @IsDateString()
  @IsOptional()
  departureDate?: Date;

  @IsDateString()
  @IsOptional()
  arrivalDate?: Date;

  @IsNumber()
  @IsOptional()
  totalCost?: number;

  @IsEnum(FlightClass)
  @IsOptional()
  class?: FlightClass;

  @IsEnum(FlightStatus)
  @IsOptional()
  status?: FlightStatus;
}
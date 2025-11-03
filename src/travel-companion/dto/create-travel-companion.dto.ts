import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateTravelCompanionDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idTravel: number;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(45)
  @IsNotEmpty()
  surname: string;

  @IsEmail()
  @MaxLength(60)
  @IsOptional()
  email?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  relationship?: string;
}
import { IsString, IsNumber } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsNumber()
  price: number;
}
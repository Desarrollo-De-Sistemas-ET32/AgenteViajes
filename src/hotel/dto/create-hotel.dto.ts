import { IsOptional, IsString, IsNumber, IsInt, Min, Max } from 'class-validator';

export class CreateHotelDto {
  @IsOptional()
  @IsString()
  hotelName?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  stars?: number;

  @IsOptional()
  @IsString()
  imagePath?: string;
}
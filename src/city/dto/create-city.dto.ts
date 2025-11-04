import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  cityName: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  imagePath?: string;

  @IsNumber()
  @Min(0.0)
  @Max(5.0)
  @IsOptional()
  averageRating?: number;
}
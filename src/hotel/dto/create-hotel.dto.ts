import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsNumber,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  hotelName: string;

  @IsInt()
  @IsNotEmpty()
  cityId: number;

  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(5)
  stars?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  imagePath?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  amenities?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  @Min(0.0)
  @Max(5.0)
  rating?: number;
}
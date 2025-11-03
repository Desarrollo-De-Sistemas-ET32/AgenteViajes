import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsInt,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  surname: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(60)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  address: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(1)
  membership?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  profileImagePath?: string;
}
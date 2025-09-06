import { IsString, IsEmail, IsOptional, IsArray, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsArray()
  @IsString({ each: true })
  @IsIn(['user', 'admin'], { each: true })
  roles: string[];

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsOptional()
  membership?: number;
}

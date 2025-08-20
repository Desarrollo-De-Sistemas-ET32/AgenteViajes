import { IsString, IsEmail, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string; // en la tabla lo pusiste como VARCHAR(20), ojo que tu entity lo tiene como int 👀

  @IsString()
  address: string;

  @IsOptional()
  @IsInt()
  membership?: number;
}

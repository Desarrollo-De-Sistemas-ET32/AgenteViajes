import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateUserSettingDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  settingKey: string;

  @IsString()
  @IsOptional()
  settingValue?: string;
}
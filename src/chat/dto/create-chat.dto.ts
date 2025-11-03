import { IsEnum, IsInt, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
import { ChatStatus } from '../../entities/chat.entity';

export class CreateChatDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  idUser?: number;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  chatTitle?: string;

  @IsEnum(ChatStatus)
  @IsOptional()
  status?: ChatStatus;
}
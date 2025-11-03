import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, IsObject } from 'class-validator';
import { MessageSender, MessageType } from '../../entities/message.entity';

export class CreateMessageDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idChat: number;

  @IsEnum(MessageSender)
  @IsNotEmpty()
  sender: MessageSender;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(MessageType)
  @IsOptional()
  messageType?: MessageType;

  @IsObject()
  @IsOptional()
  metadata?: any;

  @IsInt()
  @IsOptional()
  isRead?: number;
}
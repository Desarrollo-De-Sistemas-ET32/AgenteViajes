import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
import { NotificationType, RelatedEntityType } from '../../entities/notification.entity';

export class CreateNotificationDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsEnum(NotificationType)
  @IsOptional()
  type?: NotificationType;

  @IsInt()
  @IsOptional()
  isRead?: number;

  @IsEnum(RelatedEntityType)
  @IsOptional()
  relatedEntityType?: RelatedEntityType;

  @IsInt()
  @IsPositive()
  @IsOptional()
  relatedEntityId?: number;
}
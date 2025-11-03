import { IsEnum, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { EntityType } from '../../entities/favorite.entity';

export class CreateFavoriteDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  idUser: number;

  @IsEnum(EntityType)
  @IsNotEmpty()
  entityType: EntityType;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  entityId: number;
}
import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteDto } from './create-favorites.dto';

export class UpdateFavoriteDto extends PartialType(CreateFavoriteDto) {}
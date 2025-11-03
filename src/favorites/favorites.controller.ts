import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorites.dto';
import { UpdateFavoriteDto } from './dto/update-favorites.dto';
import { EntityType } from '../entities/favorite.entity';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(createFavoriteDto);
  }

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.favoritesService.findByUser(userId);
  }

  @Get('user/:userId/type/:entityType')
  findByUserAndType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('entityType') entityType: EntityType,
  ) {
    return this.favoritesService.findByUserAndType(userId, entityType);
  }

  @Get('check')
  async checkFavorite(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('entityType') entityType: EntityType,
    @Query('entityId', ParseIntPipe) entityId: number,
  ) {
    const isFavorite = await this.favoritesService.isFavorite(userId, entityType, entityId);
    return { isFavorite };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.favoritesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFavoriteDto: UpdateFavoriteDto,
  ) {
    return this.favoritesService.update(id, updateFavoriteDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.favoritesService.remove(id);
  }

  @Delete('user/:userId/entity/:entityType/:entityId')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeByUserAndEntity(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('entityType') entityType: EntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    return this.favoritesService.removeByUserAndEntity(userId, entityType, entityId);
  }
}
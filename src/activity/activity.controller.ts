import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Query,
  ParseFloatPipe,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityCategory } from '../entities/activity.entity';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Get('top-rated')
  findTopRated(@Query('limit') limit?: number) {
    return this.activityService.findTopRated(limit || 10);
  }

  @Get('search')
  searchByName(@Query('term') searchTerm: string) {
    return this.activityService.searchByName(searchTerm);
  }

  @Get('city/:cityId')
  findByCity(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.activityService.findByCity(cityId);
  }

  @Get('city/:cityId/count')
  countByCity(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.activityService.countByCity(cityId);
  }

  @Get('city/:cityId/average-rating')
  getAverageRatingByCity(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.activityService.getAverageRatingByCity(cityId);
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: ActivityCategory) {
    return this.activityService.findByCategory(category);
  }

  @Get('category/:category/count')
  countByCategory(@Param('category') category: ActivityCategory) {
    return this.activityService.countByCategory(category);
  }

  @Get('category/:category/city/:cityId')
  findByCategoryAndCity(
    @Param('category') category: ActivityCategory,
    @Param('cityId', ParseIntPipe) cityId: number,
  ) {
    return this.activityService.findByCategoryAndCity(category, cityId);
  }

  @Get('min-rating/:minRating')
  findByMinRating(@Param('minRating', ParseFloatPipe) minRating: number) {
    return this.activityService.findByMinRating(minRating);
  }

  @Get('cost-range')
  findByCostRange(
    @Query('min', ParseFloatPipe) minCost: number,
    @Query('max', ParseFloatPipe) maxCost: number,
  ) {
    return this.activityService.findByCostRange(minCost, maxCost);
  }

  @Get('average-rating')
  getAverageRating() {
    return this.activityService.getAverageRating();
  }

  @Get('average-cost')
  getAverageCost() {
    return this.activityService.getAverageCost();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.findOne(id);
  }

  @Get(':id/travels')
  findWithTravels(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.findWithTravels(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.update(id, updateActivityDto);
  }

  @Patch(':id/rating')
  updateRating(
    @Param('id', ParseIntPipe) id: number,
    @Body('rating', ParseFloatPipe) rating: number,
  ) {
    return this.activityService.updateRating(id, rating);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.remove(id);
  }
}
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
  ParseFloatPipe,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityCategory } from '../entities/activity.entity';

@Controller('activity')
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

  @Get('category/:category')
  findByCategory(@Param('category') category: ActivityCategory) {
    return this.activityService.findByCategory(category);
  }

  @Get('category/:category/count')
  async countByCategory(@Param('category') category: ActivityCategory) {
    const count = await this.activityService.countByCategory(category);
    return { count };
  }

  @Get('location/:location')
  findByLocation(@Param('location') location: string) {
    return this.activityService.findByLocation(location);
  }

  @Get('location/:location/count')
  async countByLocation(@Param('location') location: string) {
    const count = await this.activityService.countByLocation(location);
    return { count };
  }

  @Get('cost-range')
  findByCostRange(
    @Query('min', ParseFloatPipe) minCost: number,
    @Query('max', ParseFloatPipe) maxCost: number,
  ) {
    return this.activityService.findByCostRange(minCost, maxCost);
  }

  @Get('max-cost/:maxCost')
  findByMaxCost(@Param('maxCost', ParseFloatPipe) maxCost: number) {
    return this.activityService.findByMaxCost(maxCost);
  }

  @Get('min-rating/:minRating')
  findByMinRating(@Param('minRating', ParseFloatPipe) minRating: number) {
    return this.activityService.findByMinRating(minRating);
  }

  @Get('top-rated')
  findTopRated(@Query('limit', ParseIntPipe) limit: number = 10) {
    return this.activityService.findTopRated(limit);
  }

  @Get('search')
  searchByName(@Query('name') name: string) {
    return this.activityService.searchByName(name);
  }

  @Get('statistics/average-cost')
  async getAverageCost() {
    const average = await this.activityService.getAverageCost();
    return { average };
  }

  @Get('statistics/average-rating')
  async getAverageRating() {
    const average = await this.activityService.getAverageRating();
    return { average };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.findOne(id);
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
    @Body() body: { rating: number },
  ) {
    return this.activityService.updateRating(id, body.rating);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.remove(id);
  }
}
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
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntityType } from '../entities/review.entity';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get('recent')
  getRecentReviews(@Query('limit', ParseIntPipe) limit: number = 10) {
    return this.reviewService.getRecentReviews(limit);
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.reviewService.findByUser(userId);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.reviewService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/average-rating')
  async getAverageRatingByUser(@Param('userId', ParseIntPipe) userId: number) {
    const average = await this.reviewService.getAverageRatingByUser(userId);
    return { average };
  }

  @Get('entity/:entityType/:entityId')
  findByEntity(
    @Param('entityType') entityType: ReviewEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    return this.reviewService.findByEntity(entityType, entityId);
  }

  @Get('entity/:entityType/:entityId/count')
  async countByEntity(
    @Param('entityType') entityType: ReviewEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    const count = await this.reviewService.countByEntity(entityType, entityId);
    return { count };
  }

  @Get('entity/:entityType/:entityId/average-rating')
  async getAverageRatingByEntity(
    @Param('entityType') entityType: ReviewEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    const average = await this.reviewService.getAverageRatingByEntity(entityType, entityId);
    return { average };
  }

  @Get('entity/:entityType/:entityId/top-rated')
  findTopRatedByEntity(
    @Param('entityType') entityType: ReviewEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.reviewService.findTopRatedByEntity(entityType, entityId, limit);
  }

  @Get('entity-type/:entityType')
  findByEntityType(@Param('entityType') entityType: ReviewEntityType) {
    return this.reviewService.findByEntityType(entityType);
  }

  @Get('min-rating/:rating')
  findByMinRating(@Param('rating', ParseFloatPipe) rating: number) {
    return this.reviewService.findByMinRating(rating);
  }

  @Get('check')
  async hasUserReviewedEntity(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('entityType') entityType: ReviewEntityType,
    @Query('entityId', ParseIntPipe) entityId: number,
  ) {
    const hasReviewed = await this.reviewService.hasUserReviewedEntity(userId, entityType, entityId);
    return { hasReviewed };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.remove(id);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.reviewService.removeAllByUser(userId);
  }

  @Delete('entity/:entityType/:entityId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByEntity(
    @Param('entityType') entityType: ReviewEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    return this.reviewService.removeAllByEntity(entityType, entityId);
  }
}
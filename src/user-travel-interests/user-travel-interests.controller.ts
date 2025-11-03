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
} from '@nestjs/common';
import { UserTravelInterestsService } from './user-travel-interests.service';
import { CreateUserTravelInterestDto } from './dto/create-user-travel-interests.dto';
import { UpdateUserTravelInterestDto } from './dto/update-user-travel-interests.dto';
import { InterestCategory } from '../entities/user-travel-interests.entity';

@Controller('user-travel-interests')
export class UserTravelInterestsController {
  constructor(private readonly userTravelInterestsService: UserTravelInterestsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserTravelInterestDto: CreateUserTravelInterestDto) {
    return this.userTravelInterestsService.create(createUserTravelInterestDto);
  }

  @Get()
  findAll() {
    return this.userTravelInterestsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userTravelInterestsService.findByUser(userId);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.userTravelInterestsService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/categories')
  getUserInterestCategories(@Param('userId', ParseIntPipe) userId: number) {
    return this.userTravelInterestsService.getUserInterestCategories(userId);
  }

  @Get('user/:userId/top-priorities')
  findTopPrioritiesByUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('limit', ParseIntPipe) limit: number = 5,
  ) {
    return this.userTravelInterestsService.findTopPrioritiesByUser(userId, limit);
  }

  @Get('user/:userId/average-priority')
  async getAveragePriorityByUser(@Param('userId', ParseIntPipe) userId: number) {
    const average = await this.userTravelInterestsService.getAveragePriorityByUser(userId);
    return { average };
  }

  @Get('user/:userId/priority/:priority')
  findByPriority(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('priority', ParseIntPipe) priority: number,
  ) {
    return this.userTravelInterestsService.findByPriority(userId, priority);
  }

  @Get('user/:userId/category/:category')
  findByUserAndCategory(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('category') interestCategory: InterestCategory,
  ) {
    return this.userTravelInterestsService.findByUserAndCategory(userId, interestCategory);
  }

  @Get('user/:userId/has/:category')
  async hasInterest(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('category') interestCategory: InterestCategory,
  ) {
    const hasInterest = await this.userTravelInterestsService.hasInterest(userId, interestCategory);
    return { hasInterest };
  }

  @Get('category/:category')
  findByCategory(@Param('category') interestCategory: InterestCategory) {
    return this.userTravelInterestsService.findByCategory(interestCategory);
  }

  @Get('category/:category/count')
  async countByCategory(@Param('category') interestCategory: InterestCategory) {
    const count = await this.userTravelInterestsService.countByCategory(interestCategory);
    return { count };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userTravelInterestsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserTravelInterestDto: UpdateUserTravelInterestDto,
  ) {
    return this.userTravelInterestsService.update(id, updateUserTravelInterestDto);
  }

  @Patch(':id/priority')
  updatePriority(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { priority: number },
  ) {
    return this.userTravelInterestsService.updatePriority(id, body.priority);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userTravelInterestsService.remove(id);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userTravelInterestsService.removeAllByUser(userId);
  }
}
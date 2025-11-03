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
} from '@nestjs/common';
import { DietaryRestrictionsService } from './dietary-restrictions.service';
import { CreateDietaryRestrictionDto } from './dto/create-dietary-restrictions.dto';
import { UpdateDietaryRestrictionDto } from './dto/update-dietary-restrictions.dto';
import { RestrictionType } from '../entities/dietary-restrictions.entity';

@Controller('dietary-restrictions')
export class DietaryRestrictionsController {
  constructor(private readonly dietaryRestrictionsService: DietaryRestrictionsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDietaryRestrictionDto: CreateDietaryRestrictionDto) {
    return this.dietaryRestrictionsService.create(createDietaryRestrictionDto);
  }

  @Get()
  findAll() {
    return this.dietaryRestrictionsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.dietaryRestrictionsService.findByUser(userId);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.dietaryRestrictionsService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/types')
  getUserRestrictionTypes(@Param('userId', ParseIntPipe) userId: number) {
    return this.dietaryRestrictionsService.getUserRestrictionTypes(userId);
  }

  @Get('user/:userId/type/:type')
  findByUserAndType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('type') restrictionType: RestrictionType,
  ) {
    return this.dietaryRestrictionsService.findByUserAndType(userId, restrictionType);
  }

  @Get('user/:userId/has/:type')
  async hasRestriction(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('type') restrictionType: RestrictionType,
  ) {
    const hasRestriction = await this.dietaryRestrictionsService.hasRestriction(userId, restrictionType);
    return { hasRestriction };
  }

  @Get('type/:type')
  findByType(@Param('type') restrictionType: RestrictionType) {
    return this.dietaryRestrictionsService.findByType(restrictionType);
  }

  @Get('type/:type/count')
  async countByType(@Param('type') restrictionType: RestrictionType) {
    const count = await this.dietaryRestrictionsService.countByType(restrictionType);
    return { count };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dietaryRestrictionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDietaryRestrictionDto: UpdateDietaryRestrictionDto,
  ) {
    return this.dietaryRestrictionsService.update(id, updateDietaryRestrictionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dietaryRestrictionsService.remove(id);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.dietaryRestrictionsService.removeAllByUser(userId);
  }
}
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
} from '@nestjs/common';
import { TravelHasActivityService } from './travel-has-activity.service';
import { CreateTravelHasActivityDto } from './dto/create-travel-has-activity.dto';
import { UpdateTravelHasActivityDto } from './dto/update-travel-has-activity.dto';

@Controller('travel-has-activity')
export class TravelHasActivityController {
  constructor(private readonly travelHasActivityService: TravelHasActivityService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTravelHasActivityDto: CreateTravelHasActivityDto) {
    return this.travelHasActivityService.create(createTravelHasActivityDto);
  }

  @Get()
  findAll() {
    return this.travelHasActivityService.findAll();
  }

  @Get(':travelId/:activityId')
  findOne(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('activityId', ParseIntPipe) activityId: number,
  ) {
    return this.travelHasActivityService.findOne(travelId, activityId);
  }

  @Get('travel/:travelId')
  findByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasActivityService.findByTravel(travelId);
  }

  @Get('activity/:activityId')
  findByActivity(@Param('activityId', ParseIntPipe) activityId: number) {
    return this.travelHasActivityService.findByActivity(activityId);
  }

  @Get('travel/:travelId/date-range')
  findByTravelWithDate(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.travelHasActivityService.findByTravelWithDate(
      travelId,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Get('travel/:travelId/count')
  countActivitiesByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasActivityService.countActivitiesByTravel(travelId);
  }

  @Get('activity/:activityId/count')
  countTravelsByActivity(@Param('activityId', ParseIntPipe) activityId: number) {
    return this.travelHasActivityService.countTravelsByActivity(activityId);
  }

  @Get('travel/:travelId/total-participants')
  getTotalParticipantsByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasActivityService.getTotalParticipantsByTravel(travelId);
  }

  @Patch(':travelId/:activityId')
  update(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('activityId', ParseIntPipe) activityId: number,
    @Body() updateTravelHasActivityDto: UpdateTravelHasActivityDto,
  ) {
    return this.travelHasActivityService.update(travelId, activityId, updateTravelHasActivityDto);
  }

  @Delete(':travelId/:activityId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('activityId', ParseIntPipe) activityId: number,
  ) {
    return this.travelHasActivityService.remove(travelId, activityId);
  }

  @Delete('travel/:travelId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasActivityService.removeAllByTravel(travelId);
  }

  @Delete('activity/:activityId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByActivity(@Param('activityId', ParseIntPipe) activityId: number) {
    return this.travelHasActivityService.removeAllByActivity(activityId);
  }
}
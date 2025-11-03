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
import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { TravelStatus, TravelStyle, AccommodationType } from '../entities/travel.entity';

@Controller('travels')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTravelDto: CreateTravelDto) {
    return this.travelService.create(createTravelDto);
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get('upcoming')
  findUpcoming() {
    return this.travelService.findUpcoming();
  }

  @Get('past')
  findPast() {
    return this.travelService.findPast();
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: TravelStatus) {
    return this.travelService.findByStatus(status);
  }

  @Get('status/:status/count')
  countByStatus(@Param('status') status: TravelStatus) {
    return this.travelService.countByStatus(status);
  }

  @Get('destination/:destination')
  findByDestination(@Param('destination') destination: string) {
    return this.travelService.findByDestination(destination);
  }

  @Get('travel-style/:travelStyle')
  findByTravelStyle(@Param('travelStyle') travelStyle: TravelStyle) {
    return this.travelService.findByTravelStyle(travelStyle);
  }

  @Get('accommodation-type/:accommodationType')
  findByAccommodationType(@Param('accommodationType') accommodationType: AccommodationType) {
    return this.travelService.findByAccommodationType(accommodationType);
  }

  @Get('date-range')
  findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.travelService.findByDateRange(new Date(startDate), new Date(endDate));
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.travelService.findByUser(userId);
  }

  @Get('user/:userId/count')
  countByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.travelService.countByUser(userId);
  }

  @Get('user/:userId/total-cost')
  getTotalCostByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.travelService.getTotalCostByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelService.findOne(id);
  }

  @Get(':id/relations')
  findWithRelations(@Param('id', ParseIntPipe) id: number) {
    return this.travelService.findWithRelations(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTravelDto: UpdateTravelDto,
  ) {
    return this.travelService.update(id, updateTravelDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: TravelStatus,
  ) {
    return this.travelService.updateStatus(id, status);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.travelService.remove(id);
  }
}
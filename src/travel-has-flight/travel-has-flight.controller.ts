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
import { TravelHasFlightService } from './travel-has-flight.service';
import { CreateTravelHasFlightDto } from './dto/create-travel-has-flight.dto';
import { UpdateTravelHasFlightDto } from './dto/update-travel-has-flight.dto';
import { FlightType } from '../entities/travel-has-flight.entity';

@Controller('travel-has-flight')
export class TravelHasFlightController {
  constructor(private readonly travelHasFlightService: TravelHasFlightService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTravelHasFlightDto: CreateTravelHasFlightDto) {
    return this.travelHasFlightService.create(createTravelHasFlightDto);
  }

  @Get()
  findAll() {
    return this.travelHasFlightService.findAll();
  }

  @Get('travel/:travelId')
  findByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasFlightService.findByTravel(travelId);
  }

  @Get('travel/:travelId/count')
  async countByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    const count = await this.travelHasFlightService.countByTravel(travelId);
    return { count };
  }

  @Get('travel/:travelId/type/:flightType')
  findByFlightType(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('flightType') flightType: FlightType,
  ) {
    return this.travelHasFlightService.findByFlightType(travelId, flightType);
  }

  @Get('travel/:travelId/type/:flightType/count')
  async countByFlightType(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('flightType') flightType: FlightType,
  ) {
    const count = await this.travelHasFlightService.countByFlightType(travelId, flightType);
    return { count };
  }

  @Get('flight/:flightId')
  findByFlight(@Param('flightId', ParseIntPipe) flightId: number) {
    return this.travelHasFlightService.findByFlight(flightId);
  }

  @Get('flight/:flightId/count')
  async countByFlight(@Param('flightId', ParseIntPipe) flightId: number) {
    const count = await this.travelHasFlightService.countByFlight(flightId);
    return { count };
  }

  @Get(':travelId/:flightId')
  findOne(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('flightId', ParseIntPipe) flightId: number,
  ) {
    return this.travelHasFlightService.findOne(travelId, flightId);
  }

  @Patch(':travelId/:flightId')
  update(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('flightId', ParseIntPipe) flightId: number,
    @Body() updateTravelHasFlightDto: UpdateTravelHasFlightDto,
  ) {
    return this.travelHasFlightService.update(travelId, flightId, updateTravelHasFlightDto);
  }

  @Delete(':travelId/:flightId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('flightId', ParseIntPipe) flightId: number,
  ) {
    return this.travelHasFlightService.remove(travelId, flightId);
  }

  @Delete('travel/:travelId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasFlightService.removeAllByTravel(travelId);
  }

  @Delete('flight/:flightId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByFlight(@Param('flightId', ParseIntPipe) flightId: number) {
    return this.travelHasFlightService.removeAllByFlight(flightId);
  }
}
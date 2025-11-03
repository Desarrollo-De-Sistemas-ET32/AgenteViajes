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
import { FlightService } from './flights.service';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';
import { FlightClass, FlightStatus } from '../entities/flights.entity';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @Get()
  findAll() {
    return this.flightService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.flightService.findByUser(userId);
  }

  @Get('user/:userId/upcoming')
  findUpcomingByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.flightService.findUpcomingByUser(userId);
  }

  @Get('user/:userId/total-cost')
  async getTotalCostByUser(@Param('userId', ParseIntPipe) userId: number) {
    const total = await this.flightService.getTotalCostByUser(userId);
    return { total };
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.flightService.countByUser(userId);
    return { count };
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: FlightStatus) {
    return this.flightService.findByStatus(status);
  }

  @Get('status/:status/count')
  async countByStatus(@Param('status') status: FlightStatus) {
    const count = await this.flightService.countByStatus(status);
    return { count };
  }

  @Get('class/:class')
  findByClass(@Param('class') flightClass: FlightClass) {
    return this.flightService.findByClass(flightClass);
  }

  @Get('airline/:airline')
  findByAirline(@Param('airline') airline: string) {
    return this.flightService.findByAirline(airline);
  }

  @Get('origin/:origin')
  findByOrigin(@Param('origin') origin: string) {
    return this.flightService.findByOrigin(origin);
  }

  @Get('destination/:destination')
  findByDestination(@Param('destination') destination: string) {
    return this.flightService.findByDestination(destination);
  }

  @Get('route')
  findByRoute(
    @Query('origin') origin: string,
    @Query('destination') destination: string,
  ) {
    return this.flightService.findByRoute(origin, destination);
  }

  @Get('date-range')
  findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.flightService.findByDateRange(new Date(startDate), new Date(endDate));
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.flightService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFlightDto: UpdateFlightDto,
  ) {
    return this.flightService.update(id, updateFlightDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: FlightStatus },
  ) {
    return this.flightService.updateStatus(id, body.status);
  }

  @Patch(':id/cancel')
  cancelFlight(@Param('id', ParseIntPipe) id: number) {
    return this.flightService.cancelFlight(id);
  }

  @Patch(':id/confirm')
  confirmFlight(@Param('id', ParseIntPipe) id: number) {
    return this.flightService.confirmFlight(id);
  }

  @Patch(':id/complete')
  completeFlight(@Param('id', ParseIntPipe) id: number) {
    return this.flightService.completeFlight(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.flightService.remove(id);
  }
}
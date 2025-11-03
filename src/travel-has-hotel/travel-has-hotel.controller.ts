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
import { TravelHasHotelService } from './travel-has-hotel.service';
import { CreateTravelHasHotelDto } from './dto/create-travel-has-hotel.dto';
import { UpdateTravelHasHotelDto } from './dto/update-travel-has-hotel.dto';

@Controller('travel-has-hotel')
export class TravelHasHotelController {
  constructor(private readonly travelHasHotelService: TravelHasHotelService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTravelHasHotelDto: CreateTravelHasHotelDto) {
    return this.travelHasHotelService.create(createTravelHasHotelDto);
  }

  @Get()
  findAll() {
    return this.travelHasHotelService.findAll();
  }

  @Get('travel/:travelId')
  findByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasHotelService.findByTravel(travelId);
  }

  @Get('travel/:travelId/count')
  async countByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    const count = await this.travelHasHotelService.countByTravel(travelId);
    return { count };
  }

  @Get('travel/:travelId/total-rooms')
  async getTotalRoomsByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    const total = await this.travelHasHotelService.getTotalRoomsByTravel(travelId);
    return { total };
  }

  @Get('hotel/:hotelId')
  findByHotel(@Param('hotelId', ParseIntPipe) hotelId: number) {
    return this.travelHasHotelService.findByHotel(hotelId);
  }

  @Get('hotel/:hotelId/count')
  async countByHotel(@Param('hotelId', ParseIntPipe) hotelId: number) {
    const count = await this.travelHasHotelService.countByHotel(hotelId);
    return { count };
  }

  @Get(':travelId/:hotelId')
  findOne(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('hotelId', ParseIntPipe) hotelId: number,
  ) {
    return this.travelHasHotelService.findOne(travelId, hotelId);
  }

  @Patch(':travelId/:hotelId')
  update(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('hotelId', ParseIntPipe) hotelId: number,
    @Body() updateTravelHasHotelDto: UpdateTravelHasHotelDto,
  ) {
    return this.travelHasHotelService.update(travelId, hotelId, updateTravelHasHotelDto);
  }

  @Delete(':travelId/:hotelId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Param('hotelId', ParseIntPipe) hotelId: number,
  ) {
    return this.travelHasHotelService.remove(travelId, hotelId);
  }

  @Delete('travel/:travelId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelHasHotelService.removeAllByTravel(travelId);
  }

  @Delete('hotel/:hotelId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByHotel(@Param('hotelId', ParseIntPipe) hotelId: number) {
    return this.travelHasHotelService.removeAllByHotel(hotelId);
  }
}
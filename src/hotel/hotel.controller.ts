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
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get('top-rated')
  findTopRated(@Query('limit') limit?: number) {
    return this.hotelService.findTopRated(limit || 10);
  }

  @Get('search')
  searchByName(@Query('term') searchTerm: string) {
    return this.hotelService.searchByName(searchTerm);
  }

  @Get('city/:cityId')
  findByCity(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.hotelService.findByCity(cityId);
  }

  @Get('city/:cityId/count')
  countByCity(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.hotelService.countByCity(cityId);
  }

  @Get('city/:cityId/average-rating')
  getAverageRatingByCity(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.hotelService.getAverageRatingByCity(cityId);
  }

  @Get('stars/:stars')
  findByStars(@Param('stars', ParseIntPipe) stars: number) {
    return this.hotelService.findByStars(stars);
  }

  @Get('stars/:stars/count')
  countByStars(@Param('stars', ParseIntPipe) stars: number) {
    return this.hotelService.countByStars(stars);
  }

  @Get('stars/:stars/city/:cityId')
  findByStarsAndCity(
    @Param('stars', ParseIntPipe) stars: number,
    @Param('cityId', ParseIntPipe) cityId: number,
  ) {
    return this.hotelService.findByStarsAndCity(stars, cityId);
  }

  @Get('min-rating/:minRating')
  findByMinRating(@Param('minRating', ParseFloatPipe) minRating: number) {
    return this.hotelService.findByMinRating(minRating);
  }

  @Get('average-rating')
  getAverageRating() {
    return this.hotelService.getAverageRating();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.findOne(id);
  }

  @Get(':id/travels')
  findWithTravels(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.findWithTravels(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHotelDto: UpdateHotelDto,
  ) {
    return this.hotelService.update(id, updateHotelDto);
  }

  @Patch(':id/rating')
  updateRating(
    @Param('id', ParseIntPipe) id: number,
    @Body('rating', ParseFloatPipe) rating: number,
  ) {
    return this.hotelService.updateRating(id, rating);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.remove(id);
  }
}
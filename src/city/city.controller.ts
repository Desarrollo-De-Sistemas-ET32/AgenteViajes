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
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('crear')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get('countries')
  getAllCountries() {
    return this.cityService.getAllCountries();
  }

  @Get('country/:country')
  findByCountry(@Param('country') country: string) {
    return this.cityService.findByCountry(country);
  }

  @Get('country/:country/count')
  async countByCountry(@Param('country') country: string) {
    const count = await this.cityService.countByCountry(country);
    return { count };
  }

  @Get('country/:country/average-rating')
  async getAverageRatingByCountry(@Param('country') country: string) {
    const average = await this.cityService.getAverageRatingByCountry(country);
    return { average };
  }

  @Get('search')
  searchByName(@Query('name') name: string) {
    return this.cityService.searchByName(name);
  }

  @Get('name/:cityName')
  findByName(@Param('cityName') cityName: string) {
    return this.cityService.findByName(cityName);
  }

  @Get('min-rating/:minRating')
  findByMinRating(@Param('minRating', ParseFloatPipe) minRating: number) {
    return this.cityService.findByMinRating(minRating);
  }

  @Get('top-rated')
  findTopRated(@Query('limit', ParseIntPipe) limit: number = 10) {
    return this.cityService.findTopRated(limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCityDto: UpdateCityDto,
  ) {
    return this.cityService.update(id, updateCityDto);
  }

  @Patch(':id/rating')
  updateRating(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { rating: number },
  ) {
    return this.cityService.updateRating(id, body.rating);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.remove(id);
  }
}
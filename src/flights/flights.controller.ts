import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightsDto } from './dto/create-flights.dto';
import { UpdateFlightsDto } from './dto/update-flights.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() dto: CreateFlightsDto) {
    return this.flightsService.create(dto);
  }

  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFlightsDto) {
    return this.flightsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightsService.remove(+id);
  }
}

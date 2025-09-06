// src/hotel/hotel.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { AuthGuard } from '@nestjs/passport';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('hotels')
@UseGuards(AuthGuard('jwt'), RolesGuard, ThrottlerGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  @Roles('admin')
  create(@Body() dto: CreateHotelDto) {
    return this.hotelService.create(dto);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(+id);
  }

  @Patch(':id')
  @Roles('admin')
  update(@Param('id') id: string, @Body() dto: UpdateHotelDto) {
    return this.hotelService.update(+id, dto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(+id);
  }
}

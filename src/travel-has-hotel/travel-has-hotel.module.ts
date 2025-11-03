import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelHasHotelService } from './travel-has-hotel.service';
import { TravelHasHotelController } from './travel-has-hotel.controller';
import { TravelHasHotel } from '../entities/travel-has-hotel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelHasHotel])],
  controllers: [TravelHasHotelController],
  providers: [TravelHasHotelService],
  exports: [TravelHasHotelService],
})
export class TravelHasHotelModule {}
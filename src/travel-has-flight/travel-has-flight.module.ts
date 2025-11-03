import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelHasFlightService } from './travel-has-flight.service';
import { TravelHasFlightController } from './travel-has-flight.controller';
import { TravelHasFlight } from '../entities/travel-has-flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelHasFlight])],
  controllers: [TravelHasFlightController],
  providers: [TravelHasFlightService],
  exports: [TravelHasFlightService],
})
export class TravelHasFlightModule {}
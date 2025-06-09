import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Flights])],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}

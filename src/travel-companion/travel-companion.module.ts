import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelCompanionService } from './travel-companion.service';
import { TravelCompanionController } from './travel-companion.controller';
import { TravelCompanion } from '../entities/travel-companion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelCompanion])],
  controllers: [TravelCompanionController],
  providers: [TravelCompanionService],
  exports: [TravelCompanionService],
})
export class TravelCompanionModule {}
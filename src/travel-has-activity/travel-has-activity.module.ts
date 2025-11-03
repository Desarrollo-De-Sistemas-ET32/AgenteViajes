import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelHasActivityService } from './travel-has-activity.service';
import { TravelHasActivityController } from './travel-has-activity.controller';
import { TravelHasActivity } from '../entities/travel-has-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TravelHasActivity])],
  controllers: [TravelHasActivityController],
  providers: [TravelHasActivityService],
  exports: [TravelHasActivityService],
})
export class TravelHasActivityModule {}
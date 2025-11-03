import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DietaryRestrictionsService } from './dietary-restrictions.service';
import { DietaryRestrictionsController } from './dietary-restrictions.controller';
import { DietaryRestriction } from '../entities/dietary-restrictions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DietaryRestriction])],
  controllers: [DietaryRestrictionsController],
  providers: [DietaryRestrictionsService],
  exports: [DietaryRestrictionsService],
})
export class DietaryRestrictionsModule {}
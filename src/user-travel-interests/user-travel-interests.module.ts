import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTravelInterestsService } from './user-travel-interests.service';
import { UserTravelInterestsController } from './user-travel-interests.controller';
import { UserTravelInterest } from '../entities/user-travel-interests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTravelInterest])],
  controllers: [UserTravelInterestsController],
  providers: [UserTravelInterestsService],
  exports: [UserTravelInterestsService],
})
export class UserTravelInterestsModule {}
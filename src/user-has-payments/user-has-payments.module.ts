import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasPaymentsService } from './user-has-payments.service';
import { UserHasPaymentsController } from './user-has-payments.controller';
import { UserHasPayment } from '../entities/user-has-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserHasPayment])],
  controllers: [UserHasPaymentsController],
  providers: [UserHasPaymentsService],
  exports: [UserHasPaymentsService],
})
export class UserHasPaymentsModule {}
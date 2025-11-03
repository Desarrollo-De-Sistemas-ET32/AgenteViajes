import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { UserHasPaymentsService } from './user-has-payments.service';
import { CreateUserHasPaymentDto } from './dto/create-user-has-payments.dto';

@Controller('user-has-payments')
export class UserHasPaymentsController {
  constructor(private readonly userHasPaymentsService: UserHasPaymentsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserHasPaymentDto: CreateUserHasPaymentDto) {
    return this.userHasPaymentsService.create(createUserHasPaymentDto);
  }

  @Get()
  findAll() {
    return this.userHasPaymentsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userHasPaymentsService.findByUser(userId);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.userHasPaymentsService.countByUser(userId);
    return { count };
  }

  @Get('payment/:paymentId')
  findByPayment(@Param('paymentId', ParseIntPipe) paymentId: number) {
    return this.userHasPaymentsService.findByPayment(paymentId);
  }

  @Get('payment/:paymentId/count')
  async countByPayment(@Param('paymentId', ParseIntPipe) paymentId: number) {
    const count = await this.userHasPaymentsService.countByPayment(paymentId);
    return { count };
  }

  @Get('check')
  async hasPayment(
    @Query('userId', ParseIntPipe) userId: number,
    @Query('paymentId', ParseIntPipe) paymentId: number,
  ) {
    const hasPayment = await this.userHasPaymentsService.hasPayment(userId, paymentId);
    return { hasPayment };
  }

  @Get(':userId/:paymentId')
  findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('paymentId', ParseIntPipe) paymentId: number,
  ) {
    return this.userHasPaymentsService.findOne(userId, paymentId);
  }

  @Delete(':userId/:paymentId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('paymentId', ParseIntPipe) paymentId: number,
  ) {
    return this.userHasPaymentsService.remove(userId, paymentId);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userHasPaymentsService.removeAllByUser(userId);
  }

  @Delete('payment/:paymentId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByPayment(@Param('paymentId', ParseIntPipe) paymentId: number) {
    return this.userHasPaymentsService.removeAllByPayment(paymentId);
  }
}
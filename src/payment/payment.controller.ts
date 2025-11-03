import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { PaymentService } from './payment.service';  // ← CORREGIDO: PaymentService (singular)
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentStatus, PaymentEntityType } from '../entities/payments.entity';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}  // ← CORREGIDO: paymentService (singular)

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: PaymentStatus) {
    return this.paymentService.findByStatus(status);
  }

  @Get('status/:status/count')
  async countByStatus(@Param('status') status: PaymentStatus) {
    const count = await this.paymentService.countByStatus(status);
    return { count };
  }

  @Get('status/:status/total-amount')
  async getTotalAmountByStatus(@Param('status') status: PaymentStatus) {
    const total = await this.paymentService.getTotalAmountByStatus(status);
    return { total };
  }

  @Get('transaction/:transactionCode')
  findByTransactionCode(@Param('transactionCode') transactionCode: string) {
    return this.paymentService.findByTransactionCode(transactionCode);
  }

  @Get('entity-type/:entityType')
  findByEntityType(@Param('entityType') entityType: PaymentEntityType) {
    return this.paymentService.findByEntityType(entityType);
  }

  @Get('entity/:entityType/:entityId')
  findByEntity(
    @Param('entityType') entityType: PaymentEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    return this.paymentService.findByEntity(entityType, entityId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: PaymentStatus },
  ) {
    return this.paymentService.updateStatus(id, body.status);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.remove(id);
  }
}
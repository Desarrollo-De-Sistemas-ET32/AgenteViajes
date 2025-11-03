import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment, PaymentStatus, PaymentMethod, PaymentEntityType } from '../entities/payments.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const payment = this.paymentRepository.create(createPaymentDto);
    return await this.paymentRepository.save(payment);
  }

  async findAll(): Promise<Payment[]> {
    return await this.paymentRepository.find({
      order: { paymentDate: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: { idPayments: id },  // ← CORREGIDO: era 'id', ahora es 'idPayments'
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }

    return payment;
  }

  async findByStatus(status: PaymentStatus): Promise<Payment[]> {
    return await this.paymentRepository.find({
      where: { status },
      order: { paymentDate: 'DESC' },
    });
  }

  async findByTransactionCode(transactionCode: string): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: { transactionCode },
    });

    if (!payment) {
      throw new NotFoundException(`Payment with transaction code ${transactionCode} not found`);
    }

    return payment;
  }

  async findByEntityType(entityType: PaymentEntityType): Promise<Payment[]> {
    return await this.paymentRepository.find({
      where: { entityType },
      order: { paymentDate: 'DESC' },
    });
  }

  async findByEntity(entityType: PaymentEntityType, entityId: number): Promise<Payment[]> {
    return await this.paymentRepository.find({
      where: { entityType, entityId },
      order: { paymentDate: 'DESC' },
    });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment> {
    const payment = await this.findOne(id);

    Object.assign(payment, updatePaymentDto);
    return await this.paymentRepository.save(payment);
  }

  async updateStatus(id: number, status: PaymentStatus): Promise<Payment> {
    const payment = await this.findOne(id);
    payment.status = status;
    return await this.paymentRepository.save(payment);
  }

  async remove(id: number): Promise<void> {
    const payment = await this.findOne(id);
    await this.paymentRepository.remove(payment);
  }

  async countByStatus(status: PaymentStatus): Promise<number> {
    return await this.paymentRepository.count({
      where: { status },
    });
  }

  async getTotalAmountByStatus(status: PaymentStatus): Promise<number> {
    const result = await this.paymentRepository
      .createQueryBuilder('payment')
      .select('SUM(payment.amount)', 'total')
      .where('payment.status = :status', { status })
      .getRawOne();

    return result?.total || 0;
  }
}
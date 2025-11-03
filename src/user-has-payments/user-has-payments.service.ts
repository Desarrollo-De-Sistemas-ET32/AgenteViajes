import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserHasPayment } from '../entities/user-has-payment.entity';
import { CreateUserHasPaymentDto } from './dto/create-user-has-payments.dto';

@Injectable()
export class UserHasPaymentsService {
  constructor(
    @InjectRepository(UserHasPayment)
    private readonly userHasPaymentRepository: Repository<UserHasPayment>,
  ) {}

  async create(createUserHasPaymentDto: CreateUserHasPaymentDto): Promise<UserHasPayment> {
    // Verificar si la relación ya existe
    const existing = await this.userHasPaymentRepository.findOne({
      where: {
        userIdUser: createUserHasPaymentDto.userIdUser,
        paymentsIdPayments: createUserHasPaymentDto.paymentsIdPayments,
      },
    });

    if (existing) {
      throw new ConflictException('This payment is already associated with this user');
    }

    const userHasPayment = this.userHasPaymentRepository.create(createUserHasPaymentDto);
    return await this.userHasPaymentRepository.save(userHasPayment);
  }

  async findAll(): Promise<UserHasPayment[]> {
    return await this.userHasPaymentRepository.find({
      relations: ['user', 'payment'],
    });
  }

  async findOne(userId: number, paymentId: number): Promise<UserHasPayment> {
    const userHasPayment = await this.userHasPaymentRepository.findOne({
      where: { userIdUser: userId, paymentsIdPayments: paymentId },
      relations: ['user', 'payment'],
    });

    if (!userHasPayment) {
      throw new NotFoundException(`Relation between User ${userId} and Payment ${paymentId} not found`);
    }

    return userHasPayment;
  }

  async findByUser(userId: number): Promise<UserHasPayment[]> {
    return await this.userHasPaymentRepository.find({
      where: { userIdUser: userId },
      relations: ['payment'],
    });
  }

  async findByPayment(paymentId: number): Promise<UserHasPayment[]> {
    return await this.userHasPaymentRepository.find({
      where: { paymentsIdPayments: paymentId },
      relations: ['user'],
    });
  }

  async remove(userId: number, paymentId: number): Promise<void> {
    const userHasPayment = await this.findOne(userId, paymentId);
    await this.userHasPaymentRepository.remove(userHasPayment);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const relations = await this.findByUser(userId);
    if (relations.length > 0) {
      await this.userHasPaymentRepository.remove(relations);
    }
  }

  async removeAllByPayment(paymentId: number): Promise<void> {
    const relations = await this.findByPayment(paymentId);
    if (relations.length > 0) {
      await this.userHasPaymentRepository.remove(relations);
    }
  }

  async countByUser(userId: number): Promise<number> {
    return await this.userHasPaymentRepository.count({
      where: { userIdUser: userId },
    });
  }

  async countByPayment(paymentId: number): Promise<number> {
    return await this.userHasPaymentRepository.count({
      where: { paymentsIdPayments: paymentId },
    });
  }

  async hasPayment(userId: number, paymentId: number): Promise<boolean> {
    const count = await this.userHasPaymentRepository.count({
      where: { userIdUser: userId, paymentsIdPayments: paymentId },
    });
    return count > 0;
  }
}
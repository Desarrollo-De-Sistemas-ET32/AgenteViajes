import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Payments } from '../entities/payments.entity';
import { User } from '../entities/user.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payments)
    private readonly paymentRepository: Repository<Payments>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payments> {
    const { userIds, ...paymentData } = createPaymentDto;
    
    // Crear el pago
    const payment = this.paymentRepository.create(paymentData);
    
    // Si hay usuarios asociados, buscarlos y asignarlos
    if (userIds && userIds.length > 0) {
      const users = await this.userRepository.find({
        where: { id: In(userIds) }
      });
      payment.users = users;
    }
    
    return await this.paymentRepository.save(payment);
  }

  async findAll(): Promise<Payments[]> {
    return await this.paymentRepository.find({
      relations: ['users']
    });
  }

  async findOne(id: number): Promise<Payments> {
    const payment = await this.paymentRepository.findOne({
      where: { id },
      relations: ['users']
    });
    
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payments> {
    const { userIds, ...paymentData } = updatePaymentDto;
    
    // Verificar que el pago existe
    const payment = await this.findOne(id);
    
    // Actualizar los datos básicos
    await this.paymentRepository.update(id, paymentData);
    
    // Si se proporcionaron userIds, actualizar la relación
    if (userIds !== undefined) {
      if (userIds.length > 0) {
        const users = await this.userRepository.find({
          where: { id: In(userIds) }
        });
        payment.users = users;
      } else {
        payment.users = [];
      }
      await this.paymentRepository.save(payment);
    }
    
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const payment = await this.findOne(id);
    await this.paymentRepository.remove(payment);
  }
}
import { Repository } from 'typeorm';
import { Payment, PaymentStatus, PaymentEntityType } from '../entities/payments.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentService {
    private readonly paymentRepository;
    constructor(paymentRepository: Repository<Payment>);
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    findByStatus(status: PaymentStatus): Promise<Payment[]>;
    findByTransactionCode(transactionCode: string): Promise<Payment>;
    findByEntityType(entityType: PaymentEntityType): Promise<Payment[]>;
    findByEntity(entityType: PaymentEntityType, entityId: number): Promise<Payment[]>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment>;
    updateStatus(id: number, status: PaymentStatus): Promise<Payment>;
    remove(id: number): Promise<void>;
    countByStatus(status: PaymentStatus): Promise<number>;
    getTotalAmountByStatus(status: PaymentStatus): Promise<number>;
}

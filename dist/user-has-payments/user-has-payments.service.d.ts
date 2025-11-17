import { Repository } from 'typeorm';
import { UserHasPayment } from '../entities/user-has-payment.entity';
import { CreateUserHasPaymentDto } from './dto/create-user-has-payments.dto';
export declare class UserHasPaymentsService {
    private readonly userHasPaymentRepository;
    constructor(userHasPaymentRepository: Repository<UserHasPayment>);
    create(createUserHasPaymentDto: CreateUserHasPaymentDto): Promise<UserHasPayment>;
    findAll(): Promise<UserHasPayment[]>;
    findOne(userId: number, paymentId: number): Promise<UserHasPayment>;
    findByUser(userId: number): Promise<UserHasPayment[]>;
    findByPayment(paymentId: number): Promise<UserHasPayment[]>;
    remove(userId: number, paymentId: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    removeAllByPayment(paymentId: number): Promise<void>;
    countByUser(userId: number): Promise<number>;
    countByPayment(paymentId: number): Promise<number>;
    hasPayment(userId: number, paymentId: number): Promise<boolean>;
}

import { UserHasPaymentsService } from './user-has-payments.service';
import { CreateUserHasPaymentDto } from './dto/create-user-has-payments.dto';
export declare class UserHasPaymentsController {
    private readonly userHasPaymentsService;
    constructor(userHasPaymentsService: UserHasPaymentsService);
    create(createUserHasPaymentDto: CreateUserHasPaymentDto): Promise<import("../entities/user-has-payment.entity").UserHasPayment>;
    findAll(): Promise<import("../entities/user-has-payment.entity").UserHasPayment[]>;
    findByUser(userId: number): Promise<import("../entities/user-has-payment.entity").UserHasPayment[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    findByPayment(paymentId: number): Promise<import("../entities/user-has-payment.entity").UserHasPayment[]>;
    countByPayment(paymentId: number): Promise<{
        count: number;
    }>;
    hasPayment(userId: number, paymentId: number): Promise<{
        hasPayment: boolean;
    }>;
    findOne(userId: number, paymentId: number): Promise<import("../entities/user-has-payment.entity").UserHasPayment>;
    remove(userId: number, paymentId: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    removeAllByPayment(paymentId: number): Promise<void>;
}

import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentStatus, PaymentEntityType } from '../entities/payments.entity';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(createPaymentDto: CreatePaymentDto): Promise<import("../entities/payments.entity").Payment>;
    findAll(): Promise<import("../entities/payments.entity").Payment[]>;
    findByStatus(status: PaymentStatus): Promise<import("../entities/payments.entity").Payment[]>;
    countByStatus(status: PaymentStatus): Promise<{
        count: number;
    }>;
    getTotalAmountByStatus(status: PaymentStatus): Promise<{
        total: number;
    }>;
    findByTransactionCode(transactionCode: string): Promise<import("../entities/payments.entity").Payment>;
    findByEntityType(entityType: PaymentEntityType): Promise<import("../entities/payments.entity").Payment[]>;
    findByEntity(entityType: PaymentEntityType, entityId: number): Promise<import("../entities/payments.entity").Payment[]>;
    findOne(id: number): Promise<import("../entities/payments.entity").Payment>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<import("../entities/payments.entity").Payment>;
    updateStatus(id: number, body: {
        status: PaymentStatus;
    }): Promise<import("../entities/payments.entity").Payment>;
    remove(id: number): Promise<void>;
}

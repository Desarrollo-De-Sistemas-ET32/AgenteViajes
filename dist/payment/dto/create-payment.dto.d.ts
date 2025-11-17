import { PaymentStatus, PaymentMethod, PaymentEntityType } from '../../entities/payments.entity';
export declare class CreatePaymentDto {
    status?: PaymentStatus;
    paymentDate?: Date;
    paymentMethod?: PaymentMethod;
    transactionCode?: string;
    amount: number;
    currency?: string;
    entityType: PaymentEntityType;
    entityId: number;
}

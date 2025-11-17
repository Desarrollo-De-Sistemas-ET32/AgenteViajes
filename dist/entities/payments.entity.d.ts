import { UserHasPayment } from './user-has-payment.entity';
export declare enum PaymentStatus {
    PENDING = "Pending",
    COMPLETED = "Completed",
    FAILED = "Failed",
    REFUNDED = "Refunded"
}
export declare enum PaymentMethod {
    CREDIT_CARD = "Credit Card",
    DEBIT_CARD = "Debit Card",
    PAYPAL = "PayPal",
    BANK_TRANSFER = "Bank Transfer",
    CASH = "Cash"
}
export declare enum PaymentEntityType {
    TRAVEL = "Travel",
    FLIGHT = "Flight",
    HOTEL = "Hotel",
    ACTIVITY = "Activity"
}
export declare class Payment {
    idPayments: number;
    status: PaymentStatus;
    paymentDate: Date;
    paymentMethod: PaymentMethod;
    transactionCode: string;
    amount: number;
    currency: string;
    entityType: PaymentEntityType;
    entityId: number;
    userHasPayments: UserHasPayment[];
}

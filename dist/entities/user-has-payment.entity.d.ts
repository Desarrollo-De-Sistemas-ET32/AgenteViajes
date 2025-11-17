import { User } from './user.entity';
import { Payment } from './payments.entity';
export declare class UserHasPayment {
    userIdUser: number;
    paymentsIdPayments: number;
    user: User;
    payment: Payment;
}

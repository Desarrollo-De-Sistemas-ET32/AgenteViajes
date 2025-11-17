import { User } from './user.entity';
import { Payment } from './payments.entity';
export declare class UserHasPayments {
    userId: number;
    paymentsId: number;
    user: User;
    payments: Payment;
}

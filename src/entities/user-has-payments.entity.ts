import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Payment } from './payments.entity';

@Entity('User_has_Payments')
export class UserHasPayments {
  @PrimaryColumn({ name: 'User_ID_User' })
  userId: number;

  @PrimaryColumn({ name: 'Payments_ID_Payments' })
  paymentsId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'User_ID_User' })
  user: User;

  @ManyToOne(() => Payment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Payments_ID_Payments' })
  payments: Payment;
}
import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Payment } from './payments.entity';

@Entity('User_has_Payments')
export class UserHasPayment {
  @PrimaryColumn({ name: 'User_ID_User', type: 'int' })
  userIdUser: number;

  @PrimaryColumn({ name: 'Payments_ID_Payments', type: 'int' })
  paymentsIdPayments: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'User_ID_User' })
  user: User;

  @ManyToOne(() => Payment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Payments_ID_Payments' })
  payment: Payment;
}
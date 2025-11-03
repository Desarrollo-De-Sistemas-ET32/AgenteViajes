import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { UserHasPayment } from './user-has-payment.entity';

export enum PaymentStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  FAILED = 'Failed',
  REFUNDED = 'Refunded'
}

export enum PaymentMethod {
  CREDIT_CARD = 'Credit Card',
  DEBIT_CARD = 'Debit Card',
  PAYPAL = 'PayPal',
  BANK_TRANSFER = 'Bank Transfer',
  CASH = 'Cash'
}

export enum PaymentEntityType {
  TRAVEL = 'Travel',
  FLIGHT = 'Flight',
  HOTEL = 'Hotel',
  ACTIVITY = 'Activity'
}

@Entity('Payments')
export class Payment {
  @PrimaryGeneratedColumn({ name: 'ID_Payments' })
  idPayments: number;

  @Column({
    name: 'Status',
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING
  })
  status: PaymentStatus;

  @Column({ name: 'Payment_Date', type: 'datetime', nullable: true })
  paymentDate: Date;

  @Column({
    name: 'Payment_method',
    type: 'enum',
    enum: PaymentMethod,
    nullable: true
  })
  paymentMethod: PaymentMethod;

  @Column({ name: 'Transaction_Code', type: 'varchar', length: 100, nullable: true, unique: true })
  transactionCode: string;

  @Column({ name: 'Amount', type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ name: 'Currency', type: 'varchar', length: 3, default: 'USD' })
  currency: string;

  @Column({
    name: 'Entity_Type',
    type: 'enum',
    enum: PaymentEntityType
  })
  entityType: PaymentEntityType;

  @Column({ name: 'Entity_ID', type: 'int' })
  entityId: number;

  @OneToMany(() => UserHasPayment, (userHasPayment) => userHasPayment.payment)
  userHasPayments: UserHasPayment[];
}
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

@Entity('Payments')
export class Payments {
  @PrimaryGeneratedColumn({ name: 'ID_Payments' })
  id: number;

  @Column({ 
    name: 'Status', 
    type: 'enum', 
    enum: PaymentStatus,
    nullable: true 
  })
  status: PaymentStatus;

  @Column({ name: 'Payment_Date', type: 'datetime', nullable: true })
  paymentDate: Date;

  @Column({ name: 'Payment_method', length: 45, nullable: true })
  paymentMethod: string;

  @Column({ name: 'Transaction_Code', length: 45, nullable: true })
  transactionCode: string;

  @ManyToMany(() => User, (user) => user.payments)
  @JoinTable({
    name: 'User_has_Payments',
    joinColumn: { name: 'Payments_ID_Payments', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'User_ID_User', referencedColumnName: 'id' }
  })
  users: User[];
}
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum NotificationType {
  INFO = 'Info',
  WARNING = 'Warning',
  SUCCESS = 'Success',
  ERROR = 'Error'
}

export enum RelatedEntityType {
  TRAVEL = 'Travel',
  FLIGHT = 'Flight',
  HOTEL = 'Hotel',
  ACTIVITY = 'Activity',
  PAYMENT = 'Payment'
}

@Entity('Notifications')
export class Notification {
  @PrimaryGeneratedColumn({ name: 'ID_Notification' })
  idNotification: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({ name: 'Title', type: 'varchar', length: 100 })
  title: string;

  @Column({ name: 'Message', type: 'text' })
  message: string;

  @Column({
    name: 'Type',
    type: 'enum',
    enum: NotificationType,
    default: NotificationType.INFO
  })
  type: NotificationType;

  @Column({ name: 'Is_Read', type: 'tinyint', default: 0 })
  isRead: number;

  @Column({
    name: 'Related_Entity_Type',
    type: 'enum',
    enum: RelatedEntityType,
    nullable: true
  })
  relatedEntityType: RelatedEntityType;

  @Column({ name: 'Related_Entity_ID', type: 'int', nullable: true })
  relatedEntityId: number;

  @CreateDateColumn({ name: 'Created_At' })
  createdAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
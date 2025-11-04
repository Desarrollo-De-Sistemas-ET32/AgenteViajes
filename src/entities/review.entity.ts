import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum ReviewEntityType {
  HOTEL = 'Hotel',
  ACTIVITY = 'Activity',
  CITY = 'City',
  TRAVEL = 'Travel'
}

@Entity('Review')
export class Review {
  @PrimaryGeneratedColumn({ name: 'ID_Review' })
  idReview: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({
    name: 'Entity_Type',
    type: 'enum',
    enum: ReviewEntityType
  })
  entityType: ReviewEntityType;

  @Column({ name: 'Entity_ID', type: 'int' })
  entityId: number;

  @Column({ name: 'Rating', type: 'decimal', precision: 3, scale: 2 })
  rating: number;

  @Column({ name: 'Review_Text', type: 'text', nullable: true })
  reviewText: string;

  @CreateDateColumn({ name: 'Created_At' })
  createdAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
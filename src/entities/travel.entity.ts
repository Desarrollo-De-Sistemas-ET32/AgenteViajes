import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { User } from './user.entity';
import { Activity } from './activity.entity';

@Entity('Travel')
export class Travel {
  @PrimaryGeneratedColumn({ name: 'ID_Travel' })
  id: number;

  @Column({ name: 'ID_User', nullable: true })
  idUser: number;

  @Column({ name: 'Start_date', type: 'datetime', nullable: true })
  startDate: Date;

  @Column({ name: 'End_time', type: 'datetime', nullable: true })
  endTime: Date;

  @Column({ name: 'Total_cost', type: 'decimal', precision: 10, scale: 2, nullable: true })
  totalCost: number;

  @Column({ name: 'Document_Path', length: 255, nullable: true })
  documentPath: string;

  @ManyToOne(() => User, (user) => user.travels)
  @JoinColumn({ name: 'ID_User' })
  user: User;

  @ManyToMany(() => Activity, (activity) => activity.travels)
  activities: Activity[];
}
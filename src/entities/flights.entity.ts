import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Flights')
export class Flights {
  @PrimaryGeneratedColumn({ name: 'ID_Flight' })
  id: number;

  @Column({ name: 'ID_User', nullable: true })
  idUser: number;

  @Column({ name: 'Start_date', type: 'datetime', nullable: true })
  startDate: Date;

  @Column({ name: 'End_date', type: 'datetime', nullable: true })
  endDate: Date;

  @Column({ name: 'Total_cost', type: 'decimal', precision: 10, scale: 2, nullable: true })
  totalCost: number;

  @Column({ name: 'Destination', length: 45, nullable: true })
  destination: string; // Debe ser string, no Object

  @ManyToOne(() => User, (user) => user.flights)
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
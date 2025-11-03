import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { TravelCompanion } from './travel-companion.entity';
import { TravelHasHotel } from './travel-has-hotel.entity';
import { TravelHasFlight } from './travel-has-flight.entity';
import { TravelHasActivity } from './travel-has-activity.entity';

export enum TravelStatus {
  PLANNING = 'Planning',
  CONFIRMED = 'Confirmed',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

export enum TravelStyle {
  PREFERRED = 'Preferred',
  ALTERNATIVE = 'Alternative',
}

export enum AccommodationType {
  HOTEL_LUJO = 'Hotel de Lujo',
  BOUTIQUE_HOTEL = 'Boutique Hotel',
  APARTAMENTO = 'Apartamento',
  CASA_RURAL = 'Casa Rural',
  HOSTAL = 'Hostal',
}

@Entity('Travel')
export class Travel {
  @PrimaryGeneratedColumn({ name: 'ID_Travel' })
  id: number;

  @Column({ name: 'ID_User', nullable: true })
  userId: number;

  @Column({ type: 'varchar', length: 100, name: 'Travel_Name' })
  travelName: string;

  @Column({ type: 'varchar', length: 100, name: 'Destination' })
  destination: string;

  @Column({ type: 'datetime', nullable: true, name: 'Start_date' })
  startDate: Date;

  @Column({ type: 'datetime', nullable: true, name: 'End_date' })
  endDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true, name: 'Total_cost' })
  totalCost: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'Document_Path' })
  documentPath: string;

  @Column({
    type: 'enum',
    enum: TravelStatus,
    default: TravelStatus.PLANNING,
    name: 'Status',
  })
  status: TravelStatus;

  @Column({
    type: 'enum',
    enum: TravelStyle,
    nullable: true,
    name: 'Travel_Style',
  })
  travelStyle: TravelStyle;

  @Column({
    type: 'enum',
    enum: AccommodationType,
    nullable: true,
    name: 'Accommodation_Type',
  })
  accommodationType: AccommodationType;

  @CreateDateColumn({ name: 'Created_At' })
  createdAt: Date;

  @ManyToOne(() => User, { onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;

  @OneToMany(() => TravelCompanion, (companion) => companion.travel)
  companions: TravelCompanion[];

  @OneToMany(() => TravelHasHotel, (travelHasHotel) => travelHasHotel.travel)
  hotels: TravelHasHotel[];

  @OneToMany(() => TravelHasFlight, (travelHasFlight) => travelHasFlight.travel)
  flights: TravelHasFlight[];

  @OneToMany(() => TravelHasActivity, (travelHasActivity) => travelHasActivity.travel)
  activities: TravelHasActivity[];
}
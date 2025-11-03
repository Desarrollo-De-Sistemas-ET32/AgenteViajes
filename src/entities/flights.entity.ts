import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum FlightClass {
  ECONOMY = 'Economy',
  PREMIUM = 'Premium',
  BUSINESS = 'Business',
  FIRST = 'First'
}

export enum FlightStatus {
  BOOKED = 'Booked',
  CONFIRMED = 'Confirmed',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed'
}

@Entity('Flights')
export class Flight {
  @PrimaryGeneratedColumn({ name: 'ID_Flight' })
  idFlight: number;

  @Column({ name: 'ID_User', type: 'int', nullable: true })
  idUser: number;

  @Column({ name: 'Flight_Number', type: 'varchar', length: 20, nullable: true })
  flightNumber: string;

  @Column({ name: 'Airline', type: 'varchar', length: 45, nullable: true })
  airline: string;

  @Column({ name: 'Origin', type: 'varchar', length: 45, nullable: true })
  origin: string;

  @Column({ name: 'Destination', type: 'varchar', length: 45, nullable: true })
  destination: string;

  @Column({ name: 'Departure_Date', type: 'datetime', nullable: true })
  departureDate: Date;

  @Column({ name: 'Arrival_Date', type: 'datetime', nullable: true })
  arrivalDate: Date;

  @Column({ name: 'Total_cost', type: 'decimal', precision: 10, scale: 2, nullable: true })
  totalCost: number;

  @Column({
    name: 'Class',
    type: 'enum',
    enum: FlightClass,
    default: FlightClass.ECONOMY
  })
  class: FlightClass;

  @Column({
    name: 'Status',
    type: 'enum',
    enum: FlightStatus,
    default: FlightStatus.BOOKED
  })
  status: FlightStatus;

  @ManyToOne(() => User, { onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Travel } from './travel.entity';
import { Flight } from './flights.entity';

export enum FlightType {
  OUTBOUND = 'Outbound',
  RETURN = 'Return',
  CONNECTING = 'Connecting'
}

@Entity('Travel_has_Flight')
export class TravelHasFlight {
  @PrimaryColumn({ name: 'Travel_ID_Travel', type: 'int' })
  travelIdTravel: number;

  @PrimaryColumn({ name: 'Flight_ID_Flight', type: 'int' })
  flightIdFlight: number;

  @Column({
    name: 'Flight_Type',
    type: 'enum',
    enum: FlightType,
    default: FlightType.OUTBOUND
  })
  flightType: FlightType;

  @ManyToOne(() => Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Travel_ID_Travel' })
  travel: Travel;

  @ManyToOne(() => Flight, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Flight_ID_Flight' })
  flight: Flight;
}
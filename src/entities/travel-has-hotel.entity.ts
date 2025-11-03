import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Travel } from './travel.entity';
import { Hotel } from './hotel.entity';

@Entity('Travel_has_Hotel')
export class TravelHasHotel {
  @PrimaryColumn({ name: 'Travel_ID_Travel', type: 'int' })
  travelIdTravel: number;

  @PrimaryColumn({ name: 'Hotel_ID_Hotel', type: 'int' })
  hotelIdHotel: number;

  @Column({ name: 'Check_In_Date', type: 'datetime', nullable: true })
  checkInDate: Date;

  @Column({ name: 'Check_Out_Date', type: 'datetime', nullable: true })
  checkOutDate: Date;

  @Column({ name: 'Room_Type', type: 'varchar', length: 50, nullable: true })
  roomType: string;

  @Column({ name: 'Number_of_Rooms', type: 'int', default: 1 })
  numberOfRooms: number;

  @ManyToOne(() => Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Travel_ID_Travel' })
  travel: Travel;

  @ManyToOne(() => Hotel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Hotel_ID_Hotel' })
  hotel: Hotel;
}
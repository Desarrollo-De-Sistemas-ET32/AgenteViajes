import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { TravelHasHotel } from './travel-has-hotel.entity';

@Entity('Hotel')
export class Hotel {
  @PrimaryGeneratedColumn({ name: 'ID_Hotel' })
  id: number;

  @Column({ type: 'varchar', length: 100, name: 'Hotel_name' })
  hotelName: string;

  @Column({ type: 'varchar', length: 100, name: 'Location' })
  location: string;

  @Column({ type: 'int', nullable: true, name: 'Stars' })
  stars: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'Image_Path' })
  imagePath: string;

  @Column({ type: 'text', nullable: true, name: 'Description' })
  description: string;

  @Column({ type: 'text', nullable: true, name: 'Amenities' })
  amenities: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true, name: 'Rating' })
  rating: number;

  @OneToMany(() => TravelHasHotel, (travelHasHotel) => travelHasHotel.hotel)
  travels: TravelHasHotel[];
}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Hotel')
export class Hotel {
  @PrimaryGeneratedColumn({ name: 'ID_Hotel' })
  id: number;

  @Column({ name: 'Hotel_name', length: 45, nullable: true })
  hotelName: string;

  @Column({ name: 'Location', length: 45, nullable: true })
  location: string;

  @Column({ name: 'Stars', type: 'int', nullable: true })
  stars: number;

  @Column({ name: 'Image_Path', length: 255, nullable: true })
  imagePath: string;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('City')
export class City {
  @PrimaryGeneratedColumn({ name: 'ID_City' })
  idCity: number;

  @Column({ name: 'City_Name', type: 'varchar', length: 100, unique: true })
  cityName: string;

  @Column({ name: 'Country', type: 'varchar', length: 100 })
  country: string;

  @Column({ name: 'Description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'Image_Path', type: 'varchar', length: 255, nullable: true })
  imagePath: string;

  @Column({ name: 'Average_Rating', type: 'decimal', precision: 3, scale: 2, nullable: true })
  averageRating: number;
}
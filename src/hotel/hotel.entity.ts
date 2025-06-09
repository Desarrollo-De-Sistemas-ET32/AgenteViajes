import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Hotel')
export class Hotel {
  @PrimaryGeneratedColumn()
  ID_Hotel: number;

  @Column({ nullable: true })
  Hotel_name: string;

  @Column({ nullable: true })
  Location: string;

  @Column({ nullable: true, type: 'int' })
  Stars: number;
}

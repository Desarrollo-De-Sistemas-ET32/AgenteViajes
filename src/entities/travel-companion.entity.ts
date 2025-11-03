import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Travel } from './travel.entity';

@Entity('Travel_Companion')
export class TravelCompanion {
  @PrimaryGeneratedColumn({ name: 'ID_Companion' })
  idCompanion: number;

  @Column({ name: 'ID_Travel', type: 'int' })
  idTravel: number;

  @Column({ name: 'Name', type: 'varchar', length: 45 })
  name: string;

  @Column({ name: 'Surname', type: 'varchar', length: 45 })
  surname: string;

  @Column({ name: 'Email', type: 'varchar', length: 60, nullable: true })
  email: string;

  @Column({ name: 'Phone_number', type: 'varchar', length: 20, nullable: true })
  phoneNumber: string;

  @Column({ name: 'Relationship', type: 'varchar', length: 30, nullable: true })
  relationship: string;

  @ManyToOne(() => Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_Travel' })
  travel: Travel;
}
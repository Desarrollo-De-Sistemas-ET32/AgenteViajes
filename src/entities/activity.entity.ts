import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { City } from './city.entity';
import { TravelHasActivity } from './travel-has-activity.entity';

export enum ActivityCategory {
  MUSICA = 'Música',
  HISTORIA = 'Historia',
  AVENTURA = 'Aventura',
  GASTRONOMIA = 'Gastronomía',
  CULTURA = 'Cultura',
  NATURALEZA = 'Naturaleza',
  DEPORTES = 'Deportes',
}

@Entity('Activity')
export class Activity {
  @PrimaryGeneratedColumn({ name: 'ID_Activity' })
  id: number;

  @Column({ type: 'varchar', length: 100, name: 'Activity_Name' })
  activityName: string;

  @Column({ name: 'ID_City' })
  cityId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true, name: 'Cost' })
  cost: number;

  @Column({ type: 'varchar', length: 45, nullable: true, name: 'Duration' })
  duration: string;

  @Column({
    type: 'enum',
    enum: ActivityCategory,
    nullable: true,
    name: 'Category',
  })
  category: ActivityCategory;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'Media_Path' })
  mediaPath: string;

  @Column({ type: 'text', nullable: true, name: 'Description' })
  description: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true, name: 'Rating' })
  rating: number;

  @ManyToOne(() => City, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_City' })
  city: City;

  @OneToMany(() => TravelHasActivity, (travelHasActivity) => travelHasActivity.activity)
  travels: TravelHasActivity[];
}
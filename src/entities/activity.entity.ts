import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum ActivityCategory {
  MUSICA = 'Música',
  HISTORIA = 'Historia',
  AVENTURA = 'Aventura',
  GASTRONOMIA = 'Gastronomía',
  CULTURA = 'Cultura',
  NATURALEZA = 'Naturaleza',
  DEPORTES = 'Deportes'
}

@Entity('Activity')
export class Activity {
  @PrimaryGeneratedColumn({ name: 'ID_Activity' })
  idActivity: number;

  @Column({ name: 'Activity_Name', type: 'varchar', length: 100 })
  activityName: string;

  @Column({ name: 'Location', type: 'varchar', length: 100 })
  location: string;

  @Column({ name: 'Cost', type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost: number;

  @Column({ name: 'Duration', type: 'varchar', length: 45, nullable: true })
  duration: string;

  @Column({
    name: 'Category',
    type: 'enum',
    enum: ActivityCategory,
    nullable: true
  })
  category: ActivityCategory;

  @Column({ name: 'Media_Path', type: 'varchar', length: 255, nullable: true })
  mediaPath: string;

  @Column({ name: 'Description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'Rating', type: 'decimal', precision: 3, scale: 2, nullable: true })
  rating: number;
}
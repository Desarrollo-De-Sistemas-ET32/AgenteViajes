import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Travel } from './travel.entity';

@Entity('Activity')
export class Activity {
  @PrimaryGeneratedColumn({ name: 'ID_Activity' })
  id: number;

  @Column({ name: 'Activity_Name', length: 45, nullable: true })
  activityName: string;

  @Column({ name: 'Location', length: 45, nullable: true })
  location: string;

  @Column({ name: 'Cost', type: 'decimal', precision: 10, scale: 2, nullable: true })
  cost: number;

  @Column({ name: 'Duration', length: 45, nullable: true })
  duration: string;

  @Column({ name: 'Media_Path', length: 255, nullable: true })
  mediaPath: string;

  @ManyToMany(() => Travel, (travel) => travel.activities)
  @JoinTable({
    name: 'Travel_has_Activity',
    joinColumn: { name: 'Activity_ID_Activity', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'Travel_ID_Travel', referencedColumnName: 'id' }
  })
  travels: Travel[];
}
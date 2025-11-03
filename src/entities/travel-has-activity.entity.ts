import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Travel } from './travel.entity';
import { Activity } from './activity.entity';

@Entity('Travel_has_Activity')
export class TravelHasActivity {
  @PrimaryColumn({ name: 'Travel_ID_Travel' })
  travelId: number;

  @PrimaryColumn({ name: 'Activity_ID_Activity' })
  activityId: number;

  @Column({ type: 'datetime', nullable: true, name: 'Scheduled_Date' })
  scheduledDate: Date;

  @Column({ type: 'int', default: 1, name: 'Number_of_Participants' })
  numberOfParticipants: number;

  @Column({ type: 'text', nullable: true, name: 'Special_Requirements' })
  specialRequirements: string;

  @ManyToOne(() => Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Travel_ID_Travel' })
  travel: Travel;

  @ManyToOne(() => Activity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'Activity_ID_Activity' })
  activity: Activity;
}
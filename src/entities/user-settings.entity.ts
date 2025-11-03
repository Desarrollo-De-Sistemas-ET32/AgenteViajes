import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { User } from './user.entity';

@Entity('User_Settings')
@Index(['idUser', 'settingKey'], { unique: true })
export class UserSetting {
  @PrimaryGeneratedColumn({ name: 'ID_Setting' })
  idSetting: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({ name: 'Setting_Key', type: 'varchar', length: 50 })
  settingKey: string;

  @Column({ name: 'Setting_Value', type: 'text', nullable: true })
  settingValue: string;

  @UpdateDateColumn({ name: 'Updated_At' })
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum InterestCategory {
  GASTRONOMIA = 'Gastronomía',
  NATURALEZA = 'Naturaleza',
  HISTORIA = 'Historia',
  AVENTURA = 'Aventura',
  MUSICA = 'Música',
  CULTURA = 'Cultura',
  FOTOGRAFIA = 'Fotografía'
}

@Entity('User_Travel_Interests')
export class UserTravelInterest {
  @PrimaryGeneratedColumn({ name: 'ID_Interest' })
  idInterest: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({
    name: 'Interest_Category',
    type: 'enum',
    enum: InterestCategory
  })
  interestCategory: InterestCategory;

  @Column({ name: 'Priority', type: 'tinyint', default: 1 })
  priority: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum RestrictionType {
  VEGETARIAN = 'Vegetariano',
  VEGAN = 'Vegano',
  GLUTEN_FREE = 'Sin gluten',
  FOOD_ALLERGIES = 'Alérgico alimentarios'
}

@Entity('Dietary_Restrictions')
export class DietaryRestriction {
  @PrimaryGeneratedColumn({ name: 'ID_Restriction' })
  idRestriction: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({
    name: 'Restriction_Type',
    type: 'enum',
    enum: RestrictionType
  })
  restrictionType: RestrictionType;

  @Column({ name: 'Details', type: 'text', nullable: true })
  details: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
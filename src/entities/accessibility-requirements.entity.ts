import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum RequirementType {
  WHEELCHAIR = 'Acceso para silla de ruedas',
  VISUAL = 'Asistencia visual',
  HEARING = 'Asistencia auditiva'
}

@Entity('Accessibility_Requirements')
export class AccessibilityRequirement {
  @PrimaryGeneratedColumn({ name: 'ID_Accessibility' })
  idAccessibility: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({
    name: 'Requirement_Type',
    type: 'enum',
    enum: RequirementType
  })
  requirementType: RequirementType;

  @Column({ name: 'Details', type: 'text', nullable: true })
  details: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
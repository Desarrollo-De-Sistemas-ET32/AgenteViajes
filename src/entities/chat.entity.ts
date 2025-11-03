import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Message } from './message.entity';

export enum ChatStatus {
  ACTIVE = 'Active',
  CLOSED = 'Closed',
  ARCHIVED = 'Archived'
}

@Entity('Chat')
export class Chat {
  @PrimaryGeneratedColumn({ name: 'ID_Chat' })
  idChat: number;

  @Column({ name: 'ID_User', type: 'int', nullable: true })
  idUser: number;

  @Column({ name: 'Chat_Title', type: 'varchar', length: 100, nullable: true })
  chatTitle: string;

  @CreateDateColumn({ name: 'Start_Time' })
  startTime: Date;

  @UpdateDateColumn({ name: 'Last_Activity' })
  lastActivity: Date;

  @Column({
    name: 'Status',
    type: 'enum',
    enum: ChatStatus,
    default: ChatStatus.ACTIVE
  })
  status: ChatStatus;

  @ManyToOne(() => User, { onDelete: 'SET NULL', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;

  @OneToMany(() => Message, message => message.chat)
  messages: Message[];
}
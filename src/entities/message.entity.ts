import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Chat } from './chat.entity';

export enum MessageSender {
  USER = 'user',
  BOT = 'bot'
}

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  FILE = 'file',
  LOCATION = 'location'
}

@Entity('Message')
export class Message {
  @PrimaryGeneratedColumn({ name: 'ID_Message' })
  idMessage: number;

  @Column({ name: 'ID_Chat', type: 'int' })
  idChat: number;

  @Column({
    name: 'Sender',
    type: 'enum',
    enum: MessageSender
  })
  sender: MessageSender;

  @Column({ name: 'Content', type: 'text' })
  content: string;

  @Column({
    name: 'Message_Type',
    type: 'enum',
    enum: MessageType,
    default: MessageType.TEXT
  })
  messageType: MessageType;

  @Column({ name: 'Metadata', type: 'json', nullable: true })
  metadata: any;

  @CreateDateColumn({ name: 'Timestamp' })
  timestamp: Date;

  @Column({ name: 'Is_Read', type: 'tinyint', default: 0 })
  isRead: number;

  @ManyToOne(() => Chat, chat => chat.messages, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_Chat' })
  chat: Chat;
}
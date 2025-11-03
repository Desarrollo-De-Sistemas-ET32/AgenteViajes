import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, Index } from 'typeorm';
import { User } from './user.entity';

export enum EntityType {
  HOTEL = 'Hotel',
  ACTIVITY = 'Activity',
  DESTINATION = 'Destination',
  TRAVEL = 'Travel'
}

@Entity('Favorites')
@Index(['idUser', 'entityType', 'entityId'], { unique: true })
export class Favorite {
  @PrimaryGeneratedColumn({ name: 'ID_Favorite' })
  idFavorite: number;

  @Column({ name: 'ID_User', type: 'int' })
  idUser: number;

  @Column({
    name: 'Entity_Type',
    type: 'enum',
    enum: EntityType
  })
  entityType: EntityType;

  @Column({ name: 'Entity_ID', type: 'int' })
  entityId: number;

  @CreateDateColumn({ name: 'Added_At' })
  addedAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ID_User' })
  user: User;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Travel')
export class Travel {
  @PrimaryGeneratedColumn()
  ID_Travel: number;

  @Column({ nullable: true, type: 'int' })
  ID_User: number;

  @Column({ nullable: true, type: 'datetime' })
  Start_date: Date;

  @Column({ nullable: true, type: 'datetime' })
  End_time: Date;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  Total_cost: number;
}

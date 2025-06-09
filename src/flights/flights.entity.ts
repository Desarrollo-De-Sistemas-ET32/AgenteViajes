import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Flights')
export class Flights {
  @PrimaryGeneratedColumn()
  ID_Flight: number;

  @Column({ nullable: true, type: 'int' })
  ID_User: number;

  @Column({ nullable: true, type: 'datetime' })
  Start_date: Date;

  @Column({ nullable: true, type: 'datetime' })
  End_date: Date;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  Total_cost: number;

  @Column({ nullable: true })
  Destination: string;
}

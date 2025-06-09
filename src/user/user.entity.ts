import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  ID_User: number;

  @Column()
  Name: string;

  @Column()
  Surname: string;

  @Column({ length: 60 })
  Email: string;

  @Column({ length: 20 })
  Phone_number: string;

  @Column()
  Address: string;

  @Column({ nullable: true, type: 'tinyint' })
  MemberShip: number;
}

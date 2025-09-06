import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Flights } from './flights.entity';
import { Travel } from './travel.entity';
import { Payments } from './payments.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn({ name: 'ID_User' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'json', nullable: true })
  roles: string[];

  @Column({ name: 'Name', length: 45 })
  name: string;

  @Column({ name: 'Surname', length: 45 })
  surname: string;

  @Column({ name: 'Email', length: 60 })
  email: string;

  // Tu SQL dice VARCHAR(20)
  @Column({ name: 'Phone_number', length: 20 })
  phoneNumber: string;

  @Column({ name: 'Address', length: 45 })
  address: string;

  @Column({ name: 'MemberShip', type: 'tinyint', nullable: true })
  membership: number | null;

  // 1:N con Flights (Flights tiene ID_User)
  @OneToMany(() => Flights, (flight) => flight.user)
  flights: Flights[];

  // 1:N con Travel (Travel tiene ID_User)
  @OneToMany(() => Travel, (travel) => travel.user)
  travels: Travel[];

  // N:M con Payments por tabla puente `User_has_Payments`
  @ManyToMany(() => Payments, (payment) => payment.users)
  payments: Payments[];
}

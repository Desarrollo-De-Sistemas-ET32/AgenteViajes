import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { TravelCompanion } from './travel-companion.entity';
import { Notification } from './notification.entity';
import { Chat } from './chat.entity';
import { Favorite } from './favorite.entity';
import { UserTravelInterest } from './user-travel-interests.entity';
import { DietaryRestriction } from './dietary-restrictions.entity';
import { AccessibilityRequirement } from './accessibility-requirements.entity';
import { UserSetting } from './user-settings.entity';
import { Travel } from './travel.entity';
import { Flight } from './flights.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn({ name: 'ID_User' })
  id: number;

  @Column({ type: 'varchar', length: 45, name: 'Name' })
  name: string;

  @Column({ type: 'varchar', length: 45, name: 'Surname' })
  surname: string;

  @Column({ type: 'varchar', length: 60, unique: true, name: 'Email' })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'Password', select: false })
  password: string;

  @Column({ type: 'varchar', length: 20, name: 'Phone_number' })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 45, name: 'Address' })
  address: string;

  @Column({ type: 'tinyint', default: 0, nullable: true, name: 'MemberShip' })
  membership: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'Profile_Image_Path' })
  profileImagePath: string;

  @CreateDateColumn({ name: 'Created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At' })
  updatedAt: Date;

  @OneToMany(() => Travel, (travel) => travel.user)
  travels: Travel[];

  @OneToMany(() => Flight, (flight) => flight.user)
  flights: Flight[];

  @OneToMany(() => Chat, (chat) => chat.user)
  chats: Chat[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorites: Favorite[];

  @OneToMany(() => UserTravelInterest, (interest) => interest.user)
  travelInterests: UserTravelInterest[];

  @OneToMany(() => DietaryRestriction, (restriction) => restriction.user)
  dietaryRestrictions: DietaryRestriction[];

  @OneToMany(() => AccessibilityRequirement, (requirements) => requirements.user)
  accessibilityRequirements: AccessibilityRequirement[];

  @OneToMany(() => UserSetting, (setting) => setting.user)
  settings: UserSetting[];
}
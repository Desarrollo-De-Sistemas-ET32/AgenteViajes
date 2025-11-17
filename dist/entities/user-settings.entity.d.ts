import { User } from './user.entity';
export declare class UserSetting {
    idSetting: number;
    idUser: number;
    settingKey: string;
    settingValue: string;
    updatedAt: Date;
    user: User;
}

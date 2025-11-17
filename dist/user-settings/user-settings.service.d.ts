import { Repository } from 'typeorm';
import { UserSetting } from '../entities/user-settings.entity';
import { CreateUserSettingDto } from './dto/create-user-settings.dto';
import { UpdateUserSettingDto } from './dto/update-user-settings.dto';
export declare class UserSettingsService {
    private readonly userSettingRepository;
    constructor(userSettingRepository: Repository<UserSetting>);
    create(createUserSettingDto: CreateUserSettingDto): Promise<UserSetting>;
    findAll(): Promise<UserSetting[]>;
    findOne(id: number): Promise<UserSetting>;
    findByUser(userId: number): Promise<UserSetting[]>;
    findByUserAndKey(userId: number, settingKey: string): Promise<UserSetting>;
    getSettingValue(userId: number, settingKey: string): Promise<string | null>;
    getAllSettingsByUser(userId: number): Promise<Record<string, string>>;
    update(id: number, updateUserSettingDto: UpdateUserSettingDto): Promise<UserSetting>;
    updateByUserAndKey(userId: number, settingKey: string, settingValue: string): Promise<UserSetting>;
    upsert(userId: number, settingKey: string, settingValue: string): Promise<UserSetting>;
    remove(id: number): Promise<void>;
    removeByUserAndKey(userId: number, settingKey: string): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    countByUser(userId: number): Promise<number>;
    hasSetting(userId: number, settingKey: string): Promise<boolean>;
}

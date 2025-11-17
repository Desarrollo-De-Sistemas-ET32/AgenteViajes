import { UserSettingsService } from './user-settings.service';
import { CreateUserSettingDto } from './dto/create-user-settings.dto';
import { UpdateUserSettingDto } from './dto/update-user-settings.dto';
export declare class UserSettingsController {
    private readonly userSettingsService;
    constructor(userSettingsService: UserSettingsService);
    create(createUserSettingDto: CreateUserSettingDto): Promise<import("../entities/user-settings.entity").UserSetting>;
    findAll(): Promise<import("../entities/user-settings.entity").UserSetting[]>;
    findByUser(userId: number): Promise<import("../entities/user-settings.entity").UserSetting[]>;
    getAllSettingsByUser(userId: number): Promise<Record<string, string>>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    findByUserAndKey(userId: number, settingKey: string): Promise<import("../entities/user-settings.entity").UserSetting>;
    getSettingValue(userId: number, settingKey: string): Promise<{
        value: string | null;
    }>;
    hasSetting(userId: number, settingKey: string): Promise<{
        hasSetting: boolean;
    }>;
    findOne(id: number): Promise<import("../entities/user-settings.entity").UserSetting>;
    update(id: number, updateUserSettingDto: UpdateUserSettingDto): Promise<import("../entities/user-settings.entity").UserSetting>;
    updateByUserAndKey(userId: number, settingKey: string, body: {
        settingValue: string;
    }): Promise<import("../entities/user-settings.entity").UserSetting>;
    upsert(userId: number, body: {
        settingKey: string;
        settingValue: string;
    }): Promise<import("../entities/user-settings.entity").UserSetting>;
    remove(id: number): Promise<void>;
    removeByUserAndKey(userId: number, settingKey: string): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
}

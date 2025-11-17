"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_settings_entity_1 = require("../entities/user-settings.entity");
let UserSettingsService = class UserSettingsService {
    constructor(userSettingRepository) {
        this.userSettingRepository = userSettingRepository;
    }
    async create(createUserSettingDto) {
        const existing = await this.userSettingRepository.findOne({
            where: {
                idUser: createUserSettingDto.idUser,
                settingKey: createUserSettingDto.settingKey,
            },
        });
        if (existing) {
            throw new common_1.ConflictException(`Setting ${createUserSettingDto.settingKey} already exists for this user`);
        }
        const userSetting = this.userSettingRepository.create(createUserSettingDto);
        return await this.userSettingRepository.save(userSetting);
    }
    async findAll() {
        return await this.userSettingRepository.find({
            relations: ['user'],
            order: { updatedAt: 'DESC' },
        });
    }
    async findOne(id) {
        const userSetting = await this.userSettingRepository.findOne({
            where: { idSetting: id },
            relations: ['user'],
        });
        if (!userSetting) {
            throw new common_1.NotFoundException(`User Setting with ID ${id} not found`);
        }
        return userSetting;
    }
    async findByUser(userId) {
        return await this.userSettingRepository.find({
            where: { idUser: userId },
            order: { updatedAt: 'DESC' },
        });
    }
    async findByUserAndKey(userId, settingKey) {
        const userSetting = await this.userSettingRepository.findOne({
            where: { idUser: userId, settingKey },
        });
        if (!userSetting) {
            throw new common_1.NotFoundException(`Setting ${settingKey} not found for user ${userId}`);
        }
        return userSetting;
    }
    async getSettingValue(userId, settingKey) {
        const userSetting = await this.userSettingRepository.findOne({
            where: { idUser: userId, settingKey },
        });
        return (userSetting === null || userSetting === void 0 ? void 0 : userSetting.settingValue) || null;
    }
    async getAllSettingsByUser(userId) {
        const settings = await this.findByUser(userId);
        const result = {};
        settings.forEach((setting) => {
            result[setting.settingKey] = setting.settingValue;
        });
        return result;
    }
    async update(id, updateUserSettingDto) {
        const userSetting = await this.findOne(id);
        Object.assign(userSetting, updateUserSettingDto);
        return await this.userSettingRepository.save(userSetting);
    }
    async updateByUserAndKey(userId, settingKey, settingValue) {
        const userSetting = await this.findByUserAndKey(userId, settingKey);
        userSetting.settingValue = settingValue;
        return await this.userSettingRepository.save(userSetting);
    }
    async upsert(userId, settingKey, settingValue) {
        const existing = await this.userSettingRepository.findOne({
            where: { idUser: userId, settingKey },
        });
        if (existing) {
            existing.settingValue = settingValue;
            return await this.userSettingRepository.save(existing);
        }
        const newSetting = this.userSettingRepository.create({
            idUser: userId,
            settingKey,
            settingValue,
        });
        return await this.userSettingRepository.save(newSetting);
    }
    async remove(id) {
        const userSetting = await this.findOne(id);
        await this.userSettingRepository.remove(userSetting);
    }
    async removeByUserAndKey(userId, settingKey) {
        const userSetting = await this.findByUserAndKey(userId, settingKey);
        await this.userSettingRepository.remove(userSetting);
    }
    async removeAllByUser(userId) {
        const settings = await this.findByUser(userId);
        if (settings.length > 0) {
            await this.userSettingRepository.remove(settings);
        }
    }
    async countByUser(userId) {
        return await this.userSettingRepository.count({
            where: { idUser: userId },
        });
    }
    async hasSetting(userId, settingKey) {
        const count = await this.userSettingRepository.count({
            where: { idUser: userId, settingKey },
        });
        return count > 0;
    }
};
exports.UserSettingsService = UserSettingsService;
exports.UserSettingsService = UserSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_settings_entity_1.UserSetting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserSettingsService);
//# sourceMappingURL=user-settings.service.js.map
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
exports.UserSettingsController = void 0;
const common_1 = require("@nestjs/common");
const user_settings_service_1 = require("./user-settings.service");
const create_user_settings_dto_1 = require("./dto/create-user-settings.dto");
const update_user_settings_dto_1 = require("./dto/update-user-settings.dto");
let UserSettingsController = class UserSettingsController {
    constructor(userSettingsService) {
        this.userSettingsService = userSettingsService;
    }
    create(createUserSettingDto) {
        return this.userSettingsService.create(createUserSettingDto);
    }
    findAll() {
        return this.userSettingsService.findAll();
    }
    findByUser(userId) {
        return this.userSettingsService.findByUser(userId);
    }
    getAllSettingsByUser(userId) {
        return this.userSettingsService.getAllSettingsByUser(userId);
    }
    async countByUser(userId) {
        const count = await this.userSettingsService.countByUser(userId);
        return { count };
    }
    findByUserAndKey(userId, settingKey) {
        return this.userSettingsService.findByUserAndKey(userId, settingKey);
    }
    async getSettingValue(userId, settingKey) {
        const value = await this.userSettingsService.getSettingValue(userId, settingKey);
        return { value };
    }
    async hasSetting(userId, settingKey) {
        const hasSetting = await this.userSettingsService.hasSetting(userId, settingKey);
        return { hasSetting };
    }
    findOne(id) {
        return this.userSettingsService.findOne(id);
    }
    update(id, updateUserSettingDto) {
        return this.userSettingsService.update(id, updateUserSettingDto);
    }
    updateByUserAndKey(userId, settingKey, body) {
        return this.userSettingsService.updateByUserAndKey(userId, settingKey, body.settingValue);
    }
    upsert(userId, body) {
        return this.userSettingsService.upsert(userId, body.settingKey, body.settingValue);
    }
    remove(id) {
        return this.userSettingsService.remove(id);
    }
    removeByUserAndKey(userId, settingKey) {
        return this.userSettingsService.removeByUserAndKey(userId, settingKey);
    }
    removeAllByUser(userId) {
        return this.userSettingsService.removeAllByUser(userId);
    }
};
exports.UserSettingsController = UserSettingsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_settings_dto_1.CreateUserSettingDto]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/all-settings'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "getAllSettingsByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserSettingsController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/key/:settingKey'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('settingKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "findByUserAndKey", null);
__decorate([
    (0, common_1.Get)('user/:userId/value/:settingKey'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('settingKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserSettingsController.prototype, "getSettingValue", null);
__decorate([
    (0, common_1.Get)('user/:userId/has/:settingKey'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('settingKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserSettingsController.prototype, "hasSetting", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_settings_dto_1.UpdateUserSettingDto]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('user/:userId/key/:settingKey'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('settingKey')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "updateByUserAndKey", null);
__decorate([
    (0, common_1.Post)('user/:userId/upsert'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "upsert", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('user/:userId/key/:settingKey'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('settingKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "removeByUserAndKey", null);
__decorate([
    (0, common_1.Delete)('user/:userId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSettingsController.prototype, "removeAllByUser", null);
exports.UserSettingsController = UserSettingsController = __decorate([
    (0, common_1.Controller)('user-settings'),
    __metadata("design:paramtypes", [user_settings_service_1.UserSettingsService])
], UserSettingsController);
//# sourceMappingURL=user-settings.controller.js.map
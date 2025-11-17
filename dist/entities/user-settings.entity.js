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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSetting = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserSetting = class UserSetting {
};
exports.UserSetting = UserSetting;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Setting' }),
    __metadata("design:type", Number)
], UserSetting.prototype, "idSetting", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], UserSetting.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Setting_Key', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], UserSetting.prototype, "settingKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Setting_Value', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserSetting.prototype, "settingValue", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'Updated_At' }),
    __metadata("design:type", Date)
], UserSetting.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], UserSetting.prototype, "user", void 0);
exports.UserSetting = UserSetting = __decorate([
    (0, typeorm_1.Entity)('User_Settings'),
    (0, typeorm_1.Index)(['idUser', 'settingKey'], { unique: true })
], UserSetting);
//# sourceMappingURL=user-settings.entity.js.map
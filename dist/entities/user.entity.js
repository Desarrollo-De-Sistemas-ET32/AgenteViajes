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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("./notification.entity");
const chat_entity_1 = require("./chat.entity");
const favorite_entity_1 = require("./favorite.entity");
const user_travel_interests_entity_1 = require("./user-travel-interests.entity");
const dietary_restrictions_entity_1 = require("./dietary-restrictions.entity");
const accessibility_requirements_entity_1 = require("./accessibility-requirements.entity");
const user_settings_entity_1 = require("./user-settings.entity");
const travel_entity_1 = require("./travel.entity");
const flights_entity_1 = require("./flights.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_User' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, name: 'Name' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, name: 'Surname' }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, unique: true, name: 'Email' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'Password', select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, name: 'Phone_number' }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, name: 'Address' }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0, nullable: true, name: 'MemberShip' }),
    __metadata("design:type", Number)
], User.prototype, "membership", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'Profile_Image_Path' }),
    __metadata("design:type", String)
], User.prototype, "profileImagePath", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'Created_At' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'Updated_At' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_entity_1.Travel, (travel) => travel.user),
    __metadata("design:type", Array)
], User.prototype, "travels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => flights_entity_1.Flight, (flight) => flight.user),
    __metadata("design:type", Array)
], User.prototype, "flights", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chat_entity_1.Chat, (chat) => chat.user),
    __metadata("design:type", Array)
], User.prototype, "chats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, (notification) => notification.user),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.Favorite, (favorite) => favorite.user),
    __metadata("design:type", Array)
], User.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_travel_interests_entity_1.UserTravelInterest, (interest) => interest.user),
    __metadata("design:type", Array)
], User.prototype, "travelInterests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dietary_restrictions_entity_1.DietaryRestriction, (restriction) => restriction.user),
    __metadata("design:type", Array)
], User.prototype, "dietaryRestrictions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => accessibility_requirements_entity_1.AccessibilityRequirement, (requirements) => requirements.user),
    __metadata("design:type", Array)
], User.prototype, "accessibilityRequirements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_settings_entity_1.UserSetting, (setting) => setting.user),
    __metadata("design:type", Array)
], User.prototype, "settings", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('User')
], User);
//# sourceMappingURL=user.entity.js.map
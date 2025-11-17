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
exports.Notification = exports.RelatedEntityType = exports.NotificationType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "Info";
    NotificationType["WARNING"] = "Warning";
    NotificationType["SUCCESS"] = "Success";
    NotificationType["ERROR"] = "Error";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var RelatedEntityType;
(function (RelatedEntityType) {
    RelatedEntityType["TRAVEL"] = "Travel";
    RelatedEntityType["FLIGHT"] = "Flight";
    RelatedEntityType["HOTEL"] = "Hotel";
    RelatedEntityType["ACTIVITY"] = "Activity";
    RelatedEntityType["PAYMENT"] = "Payment";
})(RelatedEntityType || (exports.RelatedEntityType = RelatedEntityType = {}));
let Notification = class Notification {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Notification' }),
    __metadata("design:type", Number)
], Notification.prototype, "idNotification", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], Notification.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Title', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Message', type: 'text' }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Type',
        type: 'enum',
        enum: NotificationType,
        default: NotificationType.INFO
    }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Is_Read', type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Notification.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Related_Entity_Type',
        type: 'enum',
        enum: RelatedEntityType,
        nullable: true
    }),
    __metadata("design:type", String)
], Notification.prototype, "relatedEntityType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Related_Entity_ID', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "relatedEntityId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'Created_At' }),
    __metadata("design:type", Date)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], Notification.prototype, "user", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)('Notifications')
], Notification);
//# sourceMappingURL=notification.entity.js.map
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
exports.Message = exports.MessageType = exports.MessageSender = void 0;
const typeorm_1 = require("typeorm");
const chat_entity_1 = require("./chat.entity");
var MessageSender;
(function (MessageSender) {
    MessageSender["USER"] = "user";
    MessageSender["BOT"] = "bot";
})(MessageSender || (exports.MessageSender = MessageSender = {}));
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "text";
    MessageType["IMAGE"] = "image";
    MessageType["FILE"] = "file";
    MessageType["LOCATION"] = "location";
})(MessageType || (exports.MessageType = MessageType = {}));
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Message' }),
    __metadata("design:type", Number)
], Message.prototype, "idMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_Chat', type: 'int' }),
    __metadata("design:type", Number)
], Message.prototype, "idChat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Sender',
        type: 'enum',
        enum: MessageSender
    }),
    __metadata("design:type", String)
], Message.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Content', type: 'text' }),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Message_Type',
        type: 'enum',
        enum: MessageType,
        default: MessageType.TEXT
    }),
    __metadata("design:type", String)
], Message.prototype, "messageType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Metadata', type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Message.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'Timestamp' }),
    __metadata("design:type", Date)
], Message.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Is_Read', type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Message.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chat_entity_1.Chat, chat => chat.messages, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Chat' }),
    __metadata("design:type", chat_entity_1.Chat)
], Message.prototype, "chat", void 0);
exports.Message = Message = __decorate([
    (0, typeorm_1.Entity)('Message')
], Message);
//# sourceMappingURL=message.entity.js.map
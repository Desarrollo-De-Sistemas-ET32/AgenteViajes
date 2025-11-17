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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const update_message_dto_1 = require("./dto/update-message.dto");
const message_entity_1 = require("../entities/message.entity");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    create(createMessageDto) {
        return this.messageService.create(createMessageDto);
    }
    findAll() {
        return this.messageService.findAll();
    }
    findByChat(chatId) {
        return this.messageService.findByChat(chatId);
    }
    findUnreadByChat(chatId) {
        return this.messageService.findUnreadByChat(chatId);
    }
    async countUnreadInChat(chatId) {
        const count = await this.messageService.countUnreadInChat(chatId);
        return { count };
    }
    async countByChat(chatId) {
        const count = await this.messageService.countByChat(chatId);
        return { count };
    }
    findRecentByChat(chatId, limit = 50) {
        return this.messageService.findRecentByChat(chatId, limit);
    }
    getLastMessageByChat(chatId) {
        return this.messageService.getLastMessageByChat(chatId);
    }
    findBySender(chatId, sender) {
        return this.messageService.findBySender(chatId, sender);
    }
    async countBySender(chatId, sender) {
        const count = await this.messageService.countBySender(chatId, sender);
        return { count };
    }
    findByType(chatId, messageType) {
        return this.messageService.findByType(chatId, messageType);
    }
    async countByType(chatId, messageType) {
        const count = await this.messageService.countByType(chatId, messageType);
        return { count };
    }
    findOne(id) {
        return this.messageService.findOne(id);
    }
    update(id, updateMessageDto) {
        return this.messageService.update(id, updateMessageDto);
    }
    markAsRead(id) {
        return this.messageService.markAsRead(id);
    }
    markAllAsReadInChat(chatId) {
        return this.messageService.markAllAsReadInChat(chatId);
    }
    remove(id) {
        return this.messageService.remove(id);
    }
    removeAllByChat(chatId) {
        return this.messageService.removeAllByChat(chatId);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('chat/:chatId'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findByChat", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/unread'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findUnreadByChat", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/unread/count'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "countUnreadInChat", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/count'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "countByChat", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/recent'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findRecentByChat", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/last'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getLastMessageByChat", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/sender/:sender'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('sender')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findBySender", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/sender/:sender/count'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('sender')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "countBySender", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/type/:type'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findByType", null);
__decorate([
    (0, common_1.Get)('chat/:chatId/type/:type/count'),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "countByType", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_message_dto_1.UpdateMessageDto]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Patch)('chat/:chatId/read-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "markAllAsReadInChat", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('chat/:chatId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('chatId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "removeAllByChat", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map
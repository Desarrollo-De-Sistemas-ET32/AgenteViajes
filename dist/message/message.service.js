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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("../entities/message.entity");
let MessageService = class MessageService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async create(createMessageDto) {
        const message = this.messageRepository.create(createMessageDto);
        return await this.messageRepository.save(message);
    }
    async findAll() {
        return await this.messageRepository.find({
            relations: ['chat'],
            order: { timestamp: 'DESC' },
        });
    }
    async findOne(id) {
        const message = await this.messageRepository.findOne({
            where: { idMessage: id },
            relations: ['chat'],
        });
        if (!message) {
            throw new common_1.NotFoundException(`Message with ID ${id} not found`);
        }
        return message;
    }
    async findByChat(chatId) {
        return await this.messageRepository.find({
            where: { idChat: chatId },
            order: { timestamp: 'ASC' },
        });
    }
    async findUnreadByChat(chatId) {
        return await this.messageRepository.find({
            where: { idChat: chatId, isRead: 0 },
            order: { timestamp: 'ASC' },
        });
    }
    async findBySender(chatId, sender) {
        return await this.messageRepository.find({
            where: { idChat: chatId, sender },
            order: { timestamp: 'ASC' },
        });
    }
    async findByType(chatId, messageType) {
        return await this.messageRepository.find({
            where: { idChat: chatId, messageType },
            order: { timestamp: 'ASC' },
        });
    }
    async findRecentByChat(chatId, limit = 50) {
        return await this.messageRepository.find({
            where: { idChat: chatId },
            order: { timestamp: 'DESC' },
            take: limit,
        });
    }
    async update(id, updateMessageDto) {
        const message = await this.findOne(id);
        Object.assign(message, updateMessageDto);
        return await this.messageRepository.save(message);
    }
    async markAsRead(id) {
        const message = await this.findOne(id);
        message.isRead = 1;
        return await this.messageRepository.save(message);
    }
    async markAllAsReadInChat(chatId) {
        await this.messageRepository.update({ idChat: chatId, isRead: 0 }, { isRead: 1 });
    }
    async remove(id) {
        const message = await this.findOne(id);
        await this.messageRepository.remove(message);
    }
    async removeAllByChat(chatId) {
        const messages = await this.findByChat(chatId);
        if (messages.length > 0) {
            await this.messageRepository.remove(messages);
        }
    }
    async countUnreadInChat(chatId) {
        return await this.messageRepository.count({
            where: { idChat: chatId, isRead: 0 },
        });
    }
    async countByChat(chatId) {
        return await this.messageRepository.count({
            where: { idChat: chatId },
        });
    }
    async countBySender(chatId, sender) {
        return await this.messageRepository.count({
            where: { idChat: chatId, sender },
        });
    }
    async countByType(chatId, messageType) {
        return await this.messageRepository.count({
            where: { idChat: chatId, messageType },
        });
    }
    async getLastMessageByChat(chatId) {
        const message = await this.messageRepository.findOne({
            where: { idChat: chatId },
            order: { timestamp: 'DESC' },
        });
        return message || null;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessageService);
//# sourceMappingURL=message.service.js.map
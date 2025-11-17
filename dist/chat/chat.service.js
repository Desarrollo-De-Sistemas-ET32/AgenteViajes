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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chat_entity_1 = require("../entities/chat.entity");
let ChatService = class ChatService {
    constructor(chatRepository) {
        this.chatRepository = chatRepository;
    }
    async create(createChatDto) {
        const chat = this.chatRepository.create(createChatDto);
        return await this.chatRepository.save(chat);
    }
    async findAll() {
        return await this.chatRepository.find({
            relations: ['user', 'messages'],
            order: { lastActivity: 'DESC' },
        });
    }
    async findOne(id) {
        const chat = await this.chatRepository.findOne({
            where: { idChat: id },
            relations: ['user', 'messages'],
        });
        if (!chat) {
            throw new common_1.NotFoundException(`Chat with ID ${id} not found`);
        }
        return chat;
    }
    async findByUser(userId) {
        return await this.chatRepository.find({
            where: { idUser: userId },
            relations: ['messages'],
            order: { lastActivity: 'DESC' },
        });
    }
    async findActiveByUser(userId) {
        return await this.chatRepository.find({
            where: { idUser: userId, status: chat_entity_1.ChatStatus.ACTIVE },
            relations: ['messages'],
            order: { lastActivity: 'DESC' },
        });
    }
    async findByStatus(status) {
        return await this.chatRepository.find({
            where: { status },
            relations: ['user'],
            order: { lastActivity: 'DESC' },
        });
    }
    async findRecentByUser(userId, limit = 10) {
        return await this.chatRepository.find({
            where: { idUser: userId },
            relations: ['messages'],
            order: { lastActivity: 'DESC' },
            take: limit,
        });
    }
    async update(id, updateChatDto) {
        const chat = await this.findOne(id);
        Object.assign(chat, updateChatDto);
        return await this.chatRepository.save(chat);
    }
    async updateStatus(id, status) {
        const chat = await this.findOne(id);
        chat.status = status;
        return await this.chatRepository.save(chat);
    }
    async remove(id) {
        const chat = await this.findOne(id);
        await this.chatRepository.remove(chat);
    }
    async archiveChat(id) {
        return await this.updateStatus(id, chat_entity_1.ChatStatus.ARCHIVED);
    }
    async closeChat(id) {
        return await this.updateStatus(id, chat_entity_1.ChatStatus.CLOSED);
    }
    async reopenChat(id) {
        return await this.updateStatus(id, chat_entity_1.ChatStatus.ACTIVE);
    }
    async countByUser(userId) {
        return await this.chatRepository.count({
            where: { idUser: userId },
        });
    }
    async countByStatus(status) {
        return await this.chatRepository.count({
            where: { status },
        });
    }
    async countActiveByUser(userId) {
        return await this.chatRepository.count({
            where: { idUser: userId, status: chat_entity_1.ChatStatus.ACTIVE },
        });
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_entity_1.Chat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatService);
//# sourceMappingURL=chat.service.js.map
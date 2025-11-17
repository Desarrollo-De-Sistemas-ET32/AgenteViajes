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
exports.TravelCompanionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const travel_companion_entity_1 = require("../entities/travel-companion.entity");
let TravelCompanionService = class TravelCompanionService {
    constructor(travelCompanionRepository) {
        this.travelCompanionRepository = travelCompanionRepository;
    }
    async create(createTravelCompanionDto) {
        const companion = this.travelCompanionRepository.create(createTravelCompanionDto);
        return await this.travelCompanionRepository.save(companion);
    }
    async findAll() {
        return await this.travelCompanionRepository.find({
            relations: ['travel'],
            order: { idCompanion: 'DESC' },
        });
    }
    async findOne(id) {
        const companion = await this.travelCompanionRepository.findOne({
            where: { idCompanion: id },
            relations: ['travel'],
        });
        if (!companion) {
            throw new common_1.NotFoundException(`Travel Companion with ID ${id} not found`);
        }
        return companion;
    }
    async findByTravel(travelId) {
        return await this.travelCompanionRepository.find({
            where: { idTravel: travelId },
            order: { idCompanion: 'ASC' },
        });
    }
    async findByRelationship(relationship) {
        return await this.travelCompanionRepository.find({
            where: { relationship },
            relations: ['travel'],
            order: { idCompanion: 'DESC' },
        });
    }
    async findByEmail(email) {
        return await this.travelCompanionRepository.find({
            where: { email },
            relations: ['travel'],
            order: { idCompanion: 'DESC' },
        });
    }
    async searchByName(name) {
        return await this.travelCompanionRepository
            .createQueryBuilder('companion')
            .leftJoinAndSelect('companion.travel', 'travel')
            .where('companion.name LIKE :name OR companion.surname LIKE :name', { name: `%${name}%` })
            .orderBy('companion.idCompanion', 'DESC')
            .getMany();
    }
    async update(id, updateTravelCompanionDto) {
        const companion = await this.findOne(id);
        Object.assign(companion, updateTravelCompanionDto);
        return await this.travelCompanionRepository.save(companion);
    }
    async remove(id) {
        const companion = await this.findOne(id);
        await this.travelCompanionRepository.remove(companion);
    }
    async removeAllByTravel(travelId) {
        const companions = await this.findByTravel(travelId);
        if (companions.length > 0) {
            await this.travelCompanionRepository.remove(companions);
        }
    }
    async countByTravel(travelId) {
        return await this.travelCompanionRepository.count({
            where: { idTravel: travelId },
        });
    }
    async countByRelationship(relationship) {
        return await this.travelCompanionRepository.count({
            where: { relationship },
        });
    }
    async hasEmail(travelId, email) {
        const count = await this.travelCompanionRepository.count({
            where: { idTravel: travelId, email },
        });
        return count > 0;
    }
    async getFullName(id) {
        const companion = await this.findOne(id);
        return `${companion.name} ${companion.surname}`;
    }
};
exports.TravelCompanionService = TravelCompanionService;
exports.TravelCompanionService = TravelCompanionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(travel_companion_entity_1.TravelCompanion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TravelCompanionService);
//# sourceMappingURL=travel-companion.service.js.map
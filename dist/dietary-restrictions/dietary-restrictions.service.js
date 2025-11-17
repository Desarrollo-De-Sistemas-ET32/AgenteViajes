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
exports.DietaryRestrictionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dietary_restrictions_entity_1 = require("../entities/dietary-restrictions.entity");
let DietaryRestrictionsService = class DietaryRestrictionsService {
    constructor(dietaryRestrictionRepository) {
        this.dietaryRestrictionRepository = dietaryRestrictionRepository;
    }
    async create(createDietaryRestrictionDto) {
        const restriction = this.dietaryRestrictionRepository.create(createDietaryRestrictionDto);
        return await this.dietaryRestrictionRepository.save(restriction);
    }
    async findAll() {
        return await this.dietaryRestrictionRepository.find({
            relations: ['user'],
            order: { idRestriction: 'DESC' },
        });
    }
    async findOne(id) {
        const restriction = await this.dietaryRestrictionRepository.findOne({
            where: { idRestriction: id },
            relations: ['user'],
        });
        if (!restriction) {
            throw new common_1.NotFoundException(`Dietary Restriction with ID ${id} not found`);
        }
        return restriction;
    }
    async findByUser(userId) {
        return await this.dietaryRestrictionRepository.find({
            where: { idUser: userId },
            order: { idRestriction: 'DESC' },
        });
    }
    async findByType(restrictionType) {
        return await this.dietaryRestrictionRepository.find({
            where: { restrictionType },
            relations: ['user'],
            order: { idRestriction: 'DESC' },
        });
    }
    async findByUserAndType(userId, restrictionType) {
        return await this.dietaryRestrictionRepository.find({
            where: { idUser: userId, restrictionType },
            order: { idRestriction: 'DESC' },
        });
    }
    async update(id, updateDietaryRestrictionDto) {
        const restriction = await this.findOne(id);
        Object.assign(restriction, updateDietaryRestrictionDto);
        return await this.dietaryRestrictionRepository.save(restriction);
    }
    async remove(id) {
        const restriction = await this.findOne(id);
        await this.dietaryRestrictionRepository.remove(restriction);
    }
    async removeAllByUser(userId) {
        const restrictions = await this.findByUser(userId);
        if (restrictions.length > 0) {
            await this.dietaryRestrictionRepository.remove(restrictions);
        }
    }
    async countByUser(userId) {
        return await this.dietaryRestrictionRepository.count({
            where: { idUser: userId },
        });
    }
    async countByType(restrictionType) {
        return await this.dietaryRestrictionRepository.count({
            where: { restrictionType },
        });
    }
    async hasRestriction(userId, restrictionType) {
        const count = await this.dietaryRestrictionRepository.count({
            where: { idUser: userId, restrictionType },
        });
        return count > 0;
    }
    async getUserRestrictionTypes(userId) {
        const restrictions = await this.findByUser(userId);
        return restrictions.map(r => r.restrictionType);
    }
};
exports.DietaryRestrictionsService = DietaryRestrictionsService;
exports.DietaryRestrictionsService = DietaryRestrictionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dietary_restrictions_entity_1.DietaryRestriction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DietaryRestrictionsService);
//# sourceMappingURL=dietary-restrictions.service.js.map
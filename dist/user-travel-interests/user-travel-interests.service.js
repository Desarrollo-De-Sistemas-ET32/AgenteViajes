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
exports.UserTravelInterestsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_travel_interests_entity_1 = require("../entities/user-travel-interests.entity");
let UserTravelInterestsService = class UserTravelInterestsService {
    constructor(userTravelInterestRepository) {
        this.userTravelInterestRepository = userTravelInterestRepository;
    }
    async create(createUserTravelInterestDto) {
        const interest = this.userTravelInterestRepository.create(createUserTravelInterestDto);
        return await this.userTravelInterestRepository.save(interest);
    }
    async findAll() {
        return await this.userTravelInterestRepository.find({
            relations: ['user'],
            order: { priority: 'DESC' },
        });
    }
    async findOne(id) {
        const interest = await this.userTravelInterestRepository.findOne({
            where: { idInterest: id },
            relations: ['user'],
        });
        if (!interest) {
            throw new common_1.NotFoundException(`User Travel Interest with ID ${id} not found`);
        }
        return interest;
    }
    async findByUser(userId) {
        return await this.userTravelInterestRepository.find({
            where: { idUser: userId },
            order: { priority: 'DESC' },
        });
    }
    async findByCategory(interestCategory) {
        return await this.userTravelInterestRepository.find({
            where: { interestCategory },
            relations: ['user'],
            order: { priority: 'DESC' },
        });
    }
    async findByUserAndCategory(userId, interestCategory) {
        return await this.userTravelInterestRepository.find({
            where: { idUser: userId, interestCategory },
            order: { priority: 'DESC' },
        });
    }
    async findByPriority(userId, priority) {
        return await this.userTravelInterestRepository.find({
            where: { idUser: userId, priority },
            order: { idInterest: 'DESC' },
        });
    }
    async findTopPrioritiesByUser(userId, limit = 5) {
        return await this.userTravelInterestRepository.find({
            where: { idUser: userId },
            order: { priority: 'DESC' },
            take: limit,
        });
    }
    async update(id, updateUserTravelInterestDto) {
        const interest = await this.findOne(id);
        Object.assign(interest, updateUserTravelInterestDto);
        return await this.userTravelInterestRepository.save(interest);
    }
    async updatePriority(id, priority) {
        const interest = await this.findOne(id);
        interest.priority = priority;
        return await this.userTravelInterestRepository.save(interest);
    }
    async remove(id) {
        const interest = await this.findOne(id);
        await this.userTravelInterestRepository.remove(interest);
    }
    async removeAllByUser(userId) {
        const interests = await this.findByUser(userId);
        if (interests.length > 0) {
            await this.userTravelInterestRepository.remove(interests);
        }
    }
    async countByUser(userId) {
        return await this.userTravelInterestRepository.count({
            where: { idUser: userId },
        });
    }
    async countByCategory(interestCategory) {
        return await this.userTravelInterestRepository.count({
            where: { interestCategory },
        });
    }
    async hasInterest(userId, interestCategory) {
        const count = await this.userTravelInterestRepository.count({
            where: { idUser: userId, interestCategory },
        });
        return count > 0;
    }
    async getUserInterestCategories(userId) {
        const interests = await this.findByUser(userId);
        return interests.map(i => i.interestCategory);
    }
    async getAveragePriorityByUser(userId) {
        const result = await this.userTravelInterestRepository
            .createQueryBuilder('interest')
            .select('AVG(interest.priority)', 'average')
            .where('interest.idUser = :userId', { userId })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.average) || 0;
    }
};
exports.UserTravelInterestsService = UserTravelInterestsService;
exports.UserTravelInterestsService = UserTravelInterestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_travel_interests_entity_1.UserTravelInterest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserTravelInterestsService);
//# sourceMappingURL=user-travel-interests.service.js.map
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
exports.ActivityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const activity_entity_1 = require("../entities/activity.entity");
let ActivityService = class ActivityService {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
    }
    async create(createActivityDto) {
        const activity = this.activityRepository.create(createActivityDto);
        return await this.activityRepository.save(activity);
    }
    async findAll() {
        return await this.activityRepository.find({
            relations: ['city'],
            order: { activityName: 'ASC' },
        });
    }
    async findOne(id) {
        const activity = await this.activityRepository.findOne({
            where: { id },
            relations: ['city'],
        });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID ${id} not found`);
        }
        return activity;
    }
    async findWithTravels(id) {
        const activity = await this.activityRepository.findOne({
            where: { id },
            relations: ['city', 'travels'],
        });
        if (!activity) {
            throw new common_1.NotFoundException(`Activity with ID ${id} not found`);
        }
        return activity;
    }
    async findByCity(cityId) {
        return await this.activityRepository.find({
            where: { cityId },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async findByCategory(category) {
        return await this.activityRepository.find({
            where: { category },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async findByCategoryAndCity(category, cityId) {
        return await this.activityRepository.find({
            where: { category, cityId },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async findByMinRating(minRating) {
        return await this.activityRepository.find({
            where: { rating: (0, typeorm_2.MoreThanOrEqual)(minRating) },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async findByCostRange(minCost, maxCost) {
        return await this.activityRepository
            .createQueryBuilder('activity')
            .leftJoinAndSelect('activity.city', 'city')
            .where('activity.cost >= :minCost', { minCost })
            .andWhere('activity.cost <= :maxCost', { maxCost })
            .orderBy('activity.cost', 'ASC')
            .getMany();
    }
    async searchByName(searchTerm) {
        return await this.activityRepository.find({
            where: { activityName: (0, typeorm_2.Like)(`%${searchTerm}%`) },
            relations: ['city'],
            order: { activityName: 'ASC' },
        });
    }
    async findTopRated(limit = 10) {
        return await this.activityRepository.find({
            relations: ['city'],
            order: { rating: 'DESC' },
            take: limit,
        });
    }
    async countByCategory(category) {
        return await this.activityRepository.count({
            where: { category },
        });
    }
    async countByCity(cityId) {
        return await this.activityRepository.count({
            where: { cityId },
        });
    }
    async getAverageRating() {
        const result = await this.activityRepository
            .createQueryBuilder('activity')
            .select('AVG(activity.rating)', 'avgRating')
            .where('activity.rating IS NOT NULL')
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.avgRating) || 0;
    }
    async getAverageRatingByCity(cityId) {
        const result = await this.activityRepository
            .createQueryBuilder('activity')
            .select('AVG(activity.rating)', 'avgRating')
            .where('activity.cityId = :cityId', { cityId })
            .andWhere('activity.rating IS NOT NULL')
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.avgRating) || 0;
    }
    async getAverageCost() {
        const result = await this.activityRepository
            .createQueryBuilder('activity')
            .select('AVG(activity.cost)', 'avgCost')
            .where('activity.cost IS NOT NULL')
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.avgCost) || 0;
    }
    async update(id, updateActivityDto) {
        const activity = await this.findOne(id);
        Object.assign(activity, updateActivityDto);
        return await this.activityRepository.save(activity);
    }
    async updateRating(id, rating) {
        const activity = await this.findOne(id);
        activity.rating = rating;
        return await this.activityRepository.save(activity);
    }
    async remove(id) {
        const activity = await this.findOne(id);
        await this.activityRepository.remove(activity);
    }
};
exports.ActivityService = ActivityService;
exports.ActivityService = ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activity_entity_1.Activity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActivityService);
//# sourceMappingURL=activity.service.js.map
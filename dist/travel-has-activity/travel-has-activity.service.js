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
exports.TravelHasActivityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const travel_has_activity_entity_1 = require("../entities/travel-has-activity.entity");
let TravelHasActivityService = class TravelHasActivityService {
    constructor(travelHasActivityRepository) {
        this.travelHasActivityRepository = travelHasActivityRepository;
    }
    async create(createTravelHasActivityDto) {
        const travelHasActivity = this.travelHasActivityRepository.create(createTravelHasActivityDto);
        return await this.travelHasActivityRepository.save(travelHasActivity);
    }
    async findAll() {
        return await this.travelHasActivityRepository.find({
            relations: ['travel', 'activity'],
            order: { scheduledDate: 'ASC' },
        });
    }
    async findOne(travelId, activityId) {
        const travelHasActivity = await this.travelHasActivityRepository.findOne({
            where: { travelId, activityId },
            relations: ['travel', 'activity'],
        });
        if (!travelHasActivity) {
            throw new common_1.NotFoundException(`TravelHasActivity with Travel ID ${travelId} and Activity ID ${activityId} not found`);
        }
        return travelHasActivity;
    }
    async findByTravel(travelId) {
        return await this.travelHasActivityRepository.find({
            where: { travelId },
            relations: ['activity'],
            order: { scheduledDate: 'ASC' },
        });
    }
    async findByActivity(activityId) {
        return await this.travelHasActivityRepository.find({
            where: { activityId },
            relations: ['travel'],
            order: { scheduledDate: 'ASC' },
        });
    }
    async findByTravelWithDate(travelId, startDate, endDate) {
        return await this.travelHasActivityRepository
            .createQueryBuilder('travelHasActivity')
            .leftJoinAndSelect('travelHasActivity.activity', 'activity')
            .where('travelHasActivity.travelId = :travelId', { travelId })
            .andWhere('travelHasActivity.scheduledDate BETWEEN :startDate AND :endDate', {
            startDate,
            endDate,
        })
            .orderBy('travelHasActivity.scheduledDate', 'ASC')
            .getMany();
    }
    async countActivitiesByTravel(travelId) {
        return await this.travelHasActivityRepository.count({
            where: { travelId },
        });
    }
    async countTravelsByActivity(activityId) {
        return await this.travelHasActivityRepository.count({
            where: { activityId },
        });
    }
    async getTotalParticipantsByTravel(travelId) {
        const result = await this.travelHasActivityRepository
            .createQueryBuilder('travelHasActivity')
            .select('SUM(travelHasActivity.numberOfParticipants)', 'totalParticipants')
            .where('travelHasActivity.travelId = :travelId', { travelId })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.totalParticipants) || 0;
    }
    async update(travelId, activityId, updateTravelHasActivityDto) {
        const travelHasActivity = await this.findOne(travelId, activityId);
        Object.assign(travelHasActivity, updateTravelHasActivityDto);
        return await this.travelHasActivityRepository.save(travelHasActivity);
    }
    async remove(travelId, activityId) {
        const travelHasActivity = await this.findOne(travelId, activityId);
        await this.travelHasActivityRepository.remove(travelHasActivity);
    }
    async removeAllByTravel(travelId) {
        await this.travelHasActivityRepository.delete({ travelId });
    }
    async removeAllByActivity(activityId) {
        await this.travelHasActivityRepository.delete({ activityId });
    }
};
exports.TravelHasActivityService = TravelHasActivityService;
exports.TravelHasActivityService = TravelHasActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(travel_has_activity_entity_1.TravelHasActivity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TravelHasActivityService);
//# sourceMappingURL=travel-has-activity.service.js.map
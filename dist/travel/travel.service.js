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
exports.TravelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const travel_entity_1 = require("../entities/travel.entity");
let TravelService = class TravelService {
    constructor(travelRepository) {
        this.travelRepository = travelRepository;
    }
    async create(createTravelDto) {
        const travel = this.travelRepository.create(createTravelDto);
        return await this.travelRepository.save(travel);
    }
    async findAll() {
        return await this.travelRepository.find({
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const travel = await this.travelRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!travel) {
            throw new common_1.NotFoundException(`Travel with ID ${id} not found`);
        }
        return travel;
    }
    async findWithRelations(id) {
        const travel = await this.travelRepository.findOne({
            where: { id },
            relations: ['user', 'companions', 'hotels', 'flights', 'activities'],
        });
        if (!travel) {
            throw new common_1.NotFoundException(`Travel with ID ${id} not found`);
        }
        return travel;
    }
    async findByUser(userId) {
        return await this.travelRepository.find({
            where: { userId },
            order: { startDate: 'DESC' },
        });
    }
    async findByStatus(status) {
        return await this.travelRepository.find({
            where: { status },
            relations: ['user'],
            order: { startDate: 'ASC' },
        });
    }
    async findByDestination(destination) {
        return await this.travelRepository.find({
            where: { destination },
            relations: ['user'],
            order: { startDate: 'DESC' },
        });
    }
    async findByDateRange(startDate, endDate) {
        return await this.travelRepository.find({
            where: {
                startDate: (0, typeorm_2.Between)(startDate, endDate),
            },
            relations: ['user'],
            order: { startDate: 'ASC' },
        });
    }
    async findUpcoming() {
        const now = new Date();
        return await this.travelRepository.find({
            where: {
                startDate: (0, typeorm_2.MoreThanOrEqual)(now),
                status: travel_entity_1.TravelStatus.CONFIRMED,
            },
            relations: ['user'],
            order: { startDate: 'ASC' },
        });
    }
    async findPast() {
        const now = new Date();
        return await this.travelRepository.find({
            where: [
                { endDate: (0, typeorm_2.LessThanOrEqual)(now) },
                { status: travel_entity_1.TravelStatus.COMPLETED },
            ],
            relations: ['user'],
            order: { endDate: 'DESC' },
        });
    }
    async findByTravelStyle(travelStyle) {
        return await this.travelRepository.find({
            where: { travelStyle },
            relations: ['user'],
            order: { startDate: 'DESC' },
        });
    }
    async findByAccommodationType(accommodationType) {
        return await this.travelRepository.find({
            where: { accommodationType },
            relations: ['user'],
            order: { startDate: 'DESC' },
        });
    }
    async countByUser(userId) {
        return await this.travelRepository.count({
            where: { userId },
        });
    }
    async countByStatus(status) {
        return await this.travelRepository.count({
            where: { status },
        });
    }
    async getTotalCostByUser(userId) {
        const result = await this.travelRepository
            .createQueryBuilder('travel')
            .select('SUM(travel.totalCost)', 'totalCost')
            .where('travel.userId = :userId', { userId })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.totalCost) || 0;
    }
    async update(id, updateTravelDto) {
        const travel = await this.findOne(id);
        Object.assign(travel, updateTravelDto);
        return await this.travelRepository.save(travel);
    }
    async updateStatus(id, status) {
        const travel = await this.findOne(id);
        travel.status = status;
        return await this.travelRepository.save(travel);
    }
    async remove(id) {
        const travel = await this.findOne(id);
        await this.travelRepository.remove(travel);
    }
};
exports.TravelService = TravelService;
exports.TravelService = TravelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(travel_entity_1.Travel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TravelService);
//# sourceMappingURL=travel.service.js.map
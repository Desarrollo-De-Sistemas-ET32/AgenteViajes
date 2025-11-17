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
exports.TravelHasFlightService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const travel_has_flight_entity_1 = require("../entities/travel-has-flight.entity");
let TravelHasFlightService = class TravelHasFlightService {
    constructor(travelHasFlightRepository) {
        this.travelHasFlightRepository = travelHasFlightRepository;
    }
    async create(createTravelHasFlightDto) {
        const existing = await this.travelHasFlightRepository.findOne({
            where: {
                travelIdTravel: createTravelHasFlightDto.travelIdTravel,
                flightIdFlight: createTravelHasFlightDto.flightIdFlight,
            },
        });
        if (existing) {
            throw new common_1.ConflictException('This flight is already associated with this travel');
        }
        const travelHasFlight = this.travelHasFlightRepository.create(createTravelHasFlightDto);
        return await this.travelHasFlightRepository.save(travelHasFlight);
    }
    async findAll() {
        return await this.travelHasFlightRepository.find({
            relations: ['travel', 'flight'],
        });
    }
    async findOne(travelId, flightId) {
        const travelHasFlight = await this.travelHasFlightRepository.findOne({
            where: { travelIdTravel: travelId, flightIdFlight: flightId },
            relations: ['travel', 'flight'],
        });
        if (!travelHasFlight) {
            throw new common_1.NotFoundException(`Relation between Travel ${travelId} and Flight ${flightId} not found`);
        }
        return travelHasFlight;
    }
    async findByTravel(travelId) {
        return await this.travelHasFlightRepository.find({
            where: { travelIdTravel: travelId },
            relations: ['flight'],
        });
    }
    async findByFlight(flightId) {
        return await this.travelHasFlightRepository.find({
            where: { flightIdFlight: flightId },
            relations: ['travel'],
        });
    }
    async findByFlightType(travelId, flightType) {
        return await this.travelHasFlightRepository.find({
            where: { travelIdTravel: travelId, flightType },
            relations: ['flight'],
        });
    }
    async update(travelId, flightId, updateTravelHasFlightDto) {
        const travelHasFlight = await this.findOne(travelId, flightId);
        Object.assign(travelHasFlight, updateTravelHasFlightDto);
        return await this.travelHasFlightRepository.save(travelHasFlight);
    }
    async remove(travelId, flightId) {
        const travelHasFlight = await this.findOne(travelId, flightId);
        await this.travelHasFlightRepository.remove(travelHasFlight);
    }
    async removeAllByTravel(travelId) {
        const relations = await this.findByTravel(travelId);
        if (relations.length > 0) {
            await this.travelHasFlightRepository.remove(relations);
        }
    }
    async removeAllByFlight(flightId) {
        const relations = await this.findByFlight(flightId);
        if (relations.length > 0) {
            await this.travelHasFlightRepository.remove(relations);
        }
    }
    async countByTravel(travelId) {
        return await this.travelHasFlightRepository.count({
            where: { travelIdTravel: travelId },
        });
    }
    async countByFlight(flightId) {
        return await this.travelHasFlightRepository.count({
            where: { flightIdFlight: flightId },
        });
    }
    async countByFlightType(travelId, flightType) {
        return await this.travelHasFlightRepository.count({
            where: { travelIdTravel: travelId, flightType },
        });
    }
};
exports.TravelHasFlightService = TravelHasFlightService;
exports.TravelHasFlightService = TravelHasFlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(travel_has_flight_entity_1.TravelHasFlight)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TravelHasFlightService);
//# sourceMappingURL=travel-has-flight.service.js.map
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
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flights_entity_1 = require("../entities/flights.entity");
let FlightService = class FlightService {
    constructor(flightRepository) {
        this.flightRepository = flightRepository;
    }
    async create(createFlightDto) {
        const flight = this.flightRepository.create(createFlightDto);
        return await this.flightRepository.save(flight);
    }
    async findAll() {
        return await this.flightRepository.find({
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findOne(id) {
        const flight = await this.flightRepository.findOne({
            where: { idFlight: id },
            relations: ['user'],
        });
        if (!flight) {
            throw new common_1.NotFoundException(`Flight with ID ${id} not found`);
        }
        return flight;
    }
    async findByUser(userId) {
        return await this.flightRepository.find({
            where: { idUser: userId },
            order: { departureDate: 'ASC' },
        });
    }
    async findByStatus(status) {
        return await this.flightRepository.find({
            where: { status },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findByClass(flightClass) {
        return await this.flightRepository.find({
            where: { class: flightClass },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findByAirline(airline) {
        return await this.flightRepository.find({
            where: { airline },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findByOrigin(origin) {
        return await this.flightRepository.find({
            where: { origin },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findByDestination(destination) {
        return await this.flightRepository.find({
            where: { destination },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findByRoute(origin, destination) {
        return await this.flightRepository.find({
            where: { origin, destination },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findByDateRange(startDate, endDate) {
        return await this.flightRepository.find({
            where: {
                departureDate: (0, typeorm_2.Between)(startDate, endDate),
            },
            relations: ['user'],
            order: { departureDate: 'ASC' },
        });
    }
    async findUpcomingByUser(userId) {
        const now = new Date();
        return await this.flightRepository
            .createQueryBuilder('flight')
            .where('flight.idUser = :userId', { userId })
            .andWhere('flight.departureDate > :now', { now })
            .andWhere('flight.status IN (:...statuses)', {
            statuses: [flights_entity_1.FlightStatus.BOOKED, flights_entity_1.FlightStatus.CONFIRMED],
        })
            .orderBy('flight.departureDate', 'ASC')
            .getMany();
    }
    async update(id, updateFlightDto) {
        const flight = await this.findOne(id);
        Object.assign(flight, updateFlightDto);
        return await this.flightRepository.save(flight);
    }
    async updateStatus(id, status) {
        const flight = await this.findOne(id);
        flight.status = status;
        return await this.flightRepository.save(flight);
    }
    async cancelFlight(id) {
        return await this.updateStatus(id, flights_entity_1.FlightStatus.CANCELLED);
    }
    async confirmFlight(id) {
        return await this.updateStatus(id, flights_entity_1.FlightStatus.CONFIRMED);
    }
    async completeFlight(id) {
        return await this.updateStatus(id, flights_entity_1.FlightStatus.COMPLETED);
    }
    async remove(id) {
        const flight = await this.findOne(id);
        await this.flightRepository.remove(flight);
    }
    async getTotalCostByUser(userId) {
        const result = await this.flightRepository
            .createQueryBuilder('flight')
            .select('SUM(flight.totalCost)', 'total')
            .where('flight.idUser = :userId', { userId })
            .andWhere('flight.status != :status', { status: flights_entity_1.FlightStatus.CANCELLED })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.total) || 0;
    }
    async countByUser(userId) {
        return await this.flightRepository.count({
            where: { idUser: userId },
        });
    }
    async countByStatus(status) {
        return await this.flightRepository.count({
            where: { status },
        });
    }
};
exports.FlightService = FlightService;
exports.FlightService = FlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flights_entity_1.Flight)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightService);
//# sourceMappingURL=flights.service.js.map
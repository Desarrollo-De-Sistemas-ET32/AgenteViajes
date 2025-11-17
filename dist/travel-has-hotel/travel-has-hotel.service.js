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
exports.TravelHasHotelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const travel_has_hotel_entity_1 = require("../entities/travel-has-hotel.entity");
let TravelHasHotelService = class TravelHasHotelService {
    constructor(travelHasHotelRepository) {
        this.travelHasHotelRepository = travelHasHotelRepository;
    }
    async create(createTravelHasHotelDto) {
        const existing = await this.travelHasHotelRepository.findOne({
            where: {
                travelIdTravel: createTravelHasHotelDto.travelIdTravel,
                hotelIdHotel: createTravelHasHotelDto.hotelIdHotel,
            },
        });
        if (existing) {
            throw new common_1.ConflictException('This hotel is already associated with this travel');
        }
        const travelHasHotel = this.travelHasHotelRepository.create(createTravelHasHotelDto);
        return await this.travelHasHotelRepository.save(travelHasHotel);
    }
    async findAll() {
        return await this.travelHasHotelRepository.find({
            relations: ['travel', 'hotel'],
            order: { checkInDate: 'ASC' },
        });
    }
    async findOne(travelId, hotelId) {
        const travelHasHotel = await this.travelHasHotelRepository.findOne({
            where: { travelIdTravel: travelId, hotelIdHotel: hotelId },
            relations: ['travel', 'hotel'],
        });
        if (!travelHasHotel) {
            throw new common_1.NotFoundException(`Relation between Travel ${travelId} and Hotel ${hotelId} not found`);
        }
        return travelHasHotel;
    }
    async findByTravel(travelId) {
        return await this.travelHasHotelRepository.find({
            where: { travelIdTravel: travelId },
            relations: ['hotel'],
            order: { checkInDate: 'ASC' },
        });
    }
    async findByHotel(hotelId) {
        return await this.travelHasHotelRepository.find({
            where: { hotelIdHotel: hotelId },
            relations: ['travel'],
            order: { checkInDate: 'ASC' },
        });
    }
    async update(travelId, hotelId, updateTravelHasHotelDto) {
        const travelHasHotel = await this.findOne(travelId, hotelId);
        Object.assign(travelHasHotel, updateTravelHasHotelDto);
        return await this.travelHasHotelRepository.save(travelHasHotel);
    }
    async remove(travelId, hotelId) {
        const travelHasHotel = await this.findOne(travelId, hotelId);
        await this.travelHasHotelRepository.remove(travelHasHotel);
    }
    async removeAllByTravel(travelId) {
        const relations = await this.findByTravel(travelId);
        if (relations.length > 0) {
            await this.travelHasHotelRepository.remove(relations);
        }
    }
    async removeAllByHotel(hotelId) {
        const relations = await this.findByHotel(hotelId);
        if (relations.length > 0) {
            await this.travelHasHotelRepository.remove(relations);
        }
    }
    async countByTravel(travelId) {
        return await this.travelHasHotelRepository.count({
            where: { travelIdTravel: travelId },
        });
    }
    async countByHotel(hotelId) {
        return await this.travelHasHotelRepository.count({
            where: { hotelIdHotel: hotelId },
        });
    }
    async getTotalRoomsByTravel(travelId) {
        const result = await this.travelHasHotelRepository
            .createQueryBuilder('thh')
            .select('SUM(thh.numberOfRooms)', 'total')
            .where('thh.travelIdTravel = :travelId', { travelId })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.total) || 0;
    }
};
exports.TravelHasHotelService = TravelHasHotelService;
exports.TravelHasHotelService = TravelHasHotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(travel_has_hotel_entity_1.TravelHasHotel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TravelHasHotelService);
//# sourceMappingURL=travel-has-hotel.service.js.map
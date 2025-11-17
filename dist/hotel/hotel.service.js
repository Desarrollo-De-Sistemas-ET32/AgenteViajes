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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hotel_entity_1 = require("../entities/hotel.entity");
let HotelService = class HotelService {
    constructor(hotelRepository) {
        this.hotelRepository = hotelRepository;
    }
    async create(createHotelDto) {
        const hotel = this.hotelRepository.create(createHotelDto);
        return await this.hotelRepository.save(hotel);
    }
    async findAll() {
        return await this.hotelRepository.find({
            relations: ['city'],
            order: { hotelName: 'ASC' },
        });
    }
    async findOne(id) {
        const hotel = await this.hotelRepository.findOne({
            where: { id },
            relations: ['city'],
        });
        if (!hotel) {
            throw new common_1.NotFoundException(`Hotel with ID ${id} not found`);
        }
        return hotel;
    }
    async findWithTravels(id) {
        const hotel = await this.hotelRepository.findOne({
            where: { id },
            relations: ['city', 'travels'],
        });
        if (!hotel) {
            throw new common_1.NotFoundException(`Hotel with ID ${id} not found`);
        }
        return hotel;
    }
    async findByCity(cityId) {
        return await this.hotelRepository.find({
            where: { cityId },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async findByStars(stars) {
        return await this.hotelRepository.find({
            where: { stars },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async findByMinRating(minRating) {
        return await this.hotelRepository.find({
            where: { rating: (0, typeorm_2.MoreThanOrEqual)(minRating) },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async searchByName(searchTerm) {
        return await this.hotelRepository.find({
            where: { hotelName: (0, typeorm_2.Like)(`%${searchTerm}%`) },
            relations: ['city'],
            order: { hotelName: 'ASC' },
        });
    }
    async findTopRated(limit = 10) {
        return await this.hotelRepository.find({
            relations: ['city'],
            order: { rating: 'DESC' },
            take: limit,
        });
    }
    async findByStarsAndCity(stars, cityId) {
        return await this.hotelRepository.find({
            where: {
                stars,
                cityId,
            },
            relations: ['city'],
            order: { rating: 'DESC' },
        });
    }
    async countByStars(stars) {
        return await this.hotelRepository.count({
            where: { stars },
        });
    }
    async countByCity(cityId) {
        return await this.hotelRepository.count({
            where: { cityId },
        });
    }
    async getAverageRating() {
        const result = await this.hotelRepository
            .createQueryBuilder('hotel')
            .select('AVG(hotel.rating)', 'avgRating')
            .where('hotel.rating IS NOT NULL')
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.avgRating) || 0;
    }
    async getAverageRatingByCity(cityId) {
        const result = await this.hotelRepository
            .createQueryBuilder('hotel')
            .select('AVG(hotel.rating)', 'avgRating')
            .where('hotel.cityId = :cityId', { cityId })
            .andWhere('hotel.rating IS NOT NULL')
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.avgRating) || 0;
    }
    async update(id, updateHotelDto) {
        const hotel = await this.findOne(id);
        Object.assign(hotel, updateHotelDto);
        return await this.hotelRepository.save(hotel);
    }
    async updateRating(id, rating) {
        const hotel = await this.findOne(id);
        hotel.rating = rating;
        return await this.hotelRepository.save(hotel);
    }
    async remove(id) {
        const hotel = await this.findOne(id);
        await this.hotelRepository.remove(hotel);
    }
};
exports.HotelService = HotelService;
exports.HotelService = HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HotelService);
//# sourceMappingURL=hotel.service.js.map
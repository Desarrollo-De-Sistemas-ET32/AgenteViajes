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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("../entities/city.entity");
let CityService = class CityService {
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    async create(createCityDto) {
        const existing = await this.cityRepository.findOne({
            where: { cityName: createCityDto.cityName },
        });
        if (existing) {
            throw new common_1.ConflictException(`City with name ${createCityDto.cityName} already exists`);
        }
        const city = this.cityRepository.create(createCityDto);
        return await this.cityRepository.save(city);
    }
    async findAll() {
        return await this.cityRepository.find({
            order: { cityName: 'ASC' },
        });
    }
    async findOne(id) {
        const city = await this.cityRepository.findOne({
            where: { idCity: id },
        });
        if (!city) {
            throw new common_1.NotFoundException(`City with ID ${id} not found`);
        }
        return city;
    }
    async findByName(cityName) {
        const city = await this.cityRepository.findOne({
            where: { cityName },
        });
        if (!city) {
            throw new common_1.NotFoundException(`City with name ${cityName} not found`);
        }
        return city;
    }
    async findByCountry(country) {
        return await this.cityRepository.find({
            where: { country },
            order: { cityName: 'ASC' },
        });
    }
    async searchByName(name) {
        return await this.cityRepository
            .createQueryBuilder('city')
            .where('city.cityName LIKE :name', { name: `%${name}%` })
            .orderBy('city.cityName', 'ASC')
            .getMany();
    }
    async findByMinRating(minRating) {
        return await this.cityRepository.find({
            where: {
                averageRating: (0, typeorm_2.MoreThanOrEqual)(minRating),
            },
            order: { averageRating: 'DESC' },
        });
    }
    async findTopRated(limit = 10) {
        return await this.cityRepository.find({
            order: { averageRating: 'DESC' },
            take: limit,
        });
    }
    async update(id, updateCityDto) {
        const city = await this.findOne(id);
        if (updateCityDto.cityName && updateCityDto.cityName !== city.cityName) {
            const existing = await this.cityRepository.findOne({
                where: { cityName: updateCityDto.cityName },
            });
            if (existing) {
                throw new common_1.ConflictException(`City with name ${updateCityDto.cityName} already exists`);
            }
        }
        Object.assign(city, updateCityDto);
        return await this.cityRepository.save(city);
    }
    async updateRating(id, rating) {
        const city = await this.findOne(id);
        city.averageRating = rating;
        return await this.cityRepository.save(city);
    }
    async remove(id) {
        const city = await this.findOne(id);
        await this.cityRepository.remove(city);
    }
    async countByCountry(country) {
        return await this.cityRepository.count({
            where: { country },
        });
    }
    async getAllCountries() {
        const cities = await this.cityRepository
            .createQueryBuilder('city')
            .select('DISTINCT city.country', 'country')
            .getRawMany();
        return cities.map(c => c.country);
    }
    async getAverageRatingByCountry(country) {
        const result = await this.cityRepository
            .createQueryBuilder('city')
            .select('AVG(city.averageRating)', 'average')
            .where('city.country = :country', { country })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.average) || 0;
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CityService);
//# sourceMappingURL=city.service.js.map
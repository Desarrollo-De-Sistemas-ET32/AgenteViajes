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
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const favorite_entity_1 = require("../entities/favorite.entity");
let FavoritesService = class FavoritesService {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }
    async create(createFavoriteDto) {
        const existing = await this.favoriteRepository.findOne({
            where: {
                idUser: createFavoriteDto.idUser,
                entityType: createFavoriteDto.entityType,
                entityId: createFavoriteDto.entityId,
            },
        });
        if (existing) {
            throw new common_1.ConflictException('This item is already in favorites');
        }
        const favorite = this.favoriteRepository.create(createFavoriteDto);
        return await this.favoriteRepository.save(favorite);
    }
    async findAll() {
        return await this.favoriteRepository.find({
            relations: ['user'],
            order: { addedAt: 'DESC' },
        });
    }
    async findOne(id) {
        const favorite = await this.favoriteRepository.findOne({
            where: { idFavorite: id },
            relations: ['user'],
        });
        if (!favorite) {
            throw new common_1.NotFoundException(`Favorite with ID ${id} not found`);
        }
        return favorite;
    }
    async findByUser(userId) {
        return await this.favoriteRepository.find({
            where: { idUser: userId },
            order: { addedAt: 'DESC' },
        });
    }
    async findByUserAndType(userId, entityType) {
        return await this.favoriteRepository.find({
            where: { idUser: userId, entityType },
            order: { addedAt: 'DESC' },
        });
    }
    async update(id, updateFavoriteDto) {
        const favorite = await this.findOne(id);
        Object.assign(favorite, updateFavoriteDto);
        return await this.favoriteRepository.save(favorite);
    }
    async remove(id) {
        const favorite = await this.findOne(id);
        await this.favoriteRepository.remove(favorite);
    }
    async removeByUserAndEntity(userId, entityType, entityId) {
        const favorite = await this.favoriteRepository.findOne({
            where: { idUser: userId, entityType, entityId },
        });
        if (!favorite) {
            throw new common_1.NotFoundException('Favorite not found');
        }
        await this.favoriteRepository.remove(favorite);
    }
    async isFavorite(userId, entityType, entityId) {
        const count = await this.favoriteRepository.count({
            where: { idUser: userId, entityType, entityId },
        });
        return count > 0;
    }
};
exports.FavoritesService = FavoritesService;
exports.FavoritesService = FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorite_entity_1.Favorite)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FavoritesService);
//# sourceMappingURL=favorites.service.js.map
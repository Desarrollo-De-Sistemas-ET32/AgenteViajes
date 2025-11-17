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
exports.HotelController = void 0;
const common_1 = require("@nestjs/common");
const hotel_service_1 = require("./hotel.service");
const create_hotel_dto_1 = require("./dto/create-hotel.dto");
const update_hotel_dto_1 = require("./dto/update-hotel.dto");
let HotelController = class HotelController {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    create(createHotelDto) {
        return this.hotelService.create(createHotelDto);
    }
    findAll() {
        return this.hotelService.findAll();
    }
    findTopRated(limit) {
        return this.hotelService.findTopRated(limit || 10);
    }
    searchByName(searchTerm) {
        return this.hotelService.searchByName(searchTerm);
    }
    findByCity(cityId) {
        return this.hotelService.findByCity(cityId);
    }
    countByCity(cityId) {
        return this.hotelService.countByCity(cityId);
    }
    getAverageRatingByCity(cityId) {
        return this.hotelService.getAverageRatingByCity(cityId);
    }
    findByStars(stars) {
        return this.hotelService.findByStars(stars);
    }
    countByStars(stars) {
        return this.hotelService.countByStars(stars);
    }
    findByStarsAndCity(stars, cityId) {
        return this.hotelService.findByStarsAndCity(stars, cityId);
    }
    findByMinRating(minRating) {
        return this.hotelService.findByMinRating(minRating);
    }
    getAverageRating() {
        return this.hotelService.getAverageRating();
    }
    findOne(id) {
        return this.hotelService.findOne(id);
    }
    findWithTravels(id) {
        return this.hotelService.findWithTravels(id);
    }
    update(id, updateHotelDto) {
        return this.hotelService.update(id, updateHotelDto);
    }
    updateRating(id, rating) {
        return this.hotelService.updateRating(id, rating);
    }
    remove(id) {
        return this.hotelService.remove(id);
    }
};
exports.HotelController = HotelController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hotel_dto_1.CreateHotelDto]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('top-rated'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findTopRated", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Get)('city/:cityId'),
    __param(0, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findByCity", null);
__decorate([
    (0, common_1.Get)('city/:cityId/count'),
    __param(0, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "countByCity", null);
__decorate([
    (0, common_1.Get)('city/:cityId/average-rating'),
    __param(0, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "getAverageRatingByCity", null);
__decorate([
    (0, common_1.Get)('stars/:stars'),
    __param(0, (0, common_1.Param)('stars', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findByStars", null);
__decorate([
    (0, common_1.Get)('stars/:stars/count'),
    __param(0, (0, common_1.Param)('stars', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "countByStars", null);
__decorate([
    (0, common_1.Get)('stars/:stars/city/:cityId'),
    __param(0, (0, common_1.Param)('stars', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findByStarsAndCity", null);
__decorate([
    (0, common_1.Get)('min-rating/:minRating'),
    __param(0, (0, common_1.Param)('minRating', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findByMinRating", null);
__decorate([
    (0, common_1.Get)('average-rating'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "getAverageRating", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/travels'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findWithTravels", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_hotel_dto_1.UpdateHotelDto]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/rating'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('rating', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "updateRating", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "remove", null);
exports.HotelController = HotelController = __decorate([
    (0, common_1.Controller)('hotels'),
    __metadata("design:paramtypes", [hotel_service_1.HotelService])
], HotelController);
//# sourceMappingURL=hotel.controller.js.map
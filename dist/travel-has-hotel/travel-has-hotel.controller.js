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
exports.TravelHasHotelController = void 0;
const common_1 = require("@nestjs/common");
const travel_has_hotel_service_1 = require("./travel-has-hotel.service");
const create_travel_has_hotel_dto_1 = require("./dto/create-travel-has-hotel.dto");
const update_travel_has_hotel_dto_1 = require("./dto/update-travel-has-hotel.dto");
let TravelHasHotelController = class TravelHasHotelController {
    constructor(travelHasHotelService) {
        this.travelHasHotelService = travelHasHotelService;
    }
    create(createTravelHasHotelDto) {
        return this.travelHasHotelService.create(createTravelHasHotelDto);
    }
    findAll() {
        return this.travelHasHotelService.findAll();
    }
    findByTravel(travelId) {
        return this.travelHasHotelService.findByTravel(travelId);
    }
    async countByTravel(travelId) {
        const count = await this.travelHasHotelService.countByTravel(travelId);
        return { count };
    }
    async getTotalRoomsByTravel(travelId) {
        const total = await this.travelHasHotelService.getTotalRoomsByTravel(travelId);
        return { total };
    }
    findByHotel(hotelId) {
        return this.travelHasHotelService.findByHotel(hotelId);
    }
    async countByHotel(hotelId) {
        const count = await this.travelHasHotelService.countByHotel(hotelId);
        return { count };
    }
    findOne(travelId, hotelId) {
        return this.travelHasHotelService.findOne(travelId, hotelId);
    }
    update(travelId, hotelId, updateTravelHasHotelDto) {
        return this.travelHasHotelService.update(travelId, hotelId, updateTravelHasHotelDto);
    }
    remove(travelId, hotelId) {
        return this.travelHasHotelService.remove(travelId, hotelId);
    }
    removeAllByTravel(travelId) {
        return this.travelHasHotelService.removeAllByTravel(travelId);
    }
    removeAllByHotel(hotelId) {
        return this.travelHasHotelService.removeAllByHotel(hotelId);
    }
};
exports.TravelHasHotelController = TravelHasHotelController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_has_hotel_dto_1.CreateTravelHasHotelDto]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('travel/:travelId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "findByTravel", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/count'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelHasHotelController.prototype, "countByTravel", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/total-rooms'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelHasHotelController.prototype, "getTotalRoomsByTravel", null);
__decorate([
    (0, common_1.Get)('hotel/:hotelId'),
    __param(0, (0, common_1.Param)('hotelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "findByHotel", null);
__decorate([
    (0, common_1.Get)('hotel/:hotelId/count'),
    __param(0, (0, common_1.Param)('hotelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelHasHotelController.prototype, "countByHotel", null);
__decorate([
    (0, common_1.Get)(':travelId/:hotelId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('hotelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':travelId/:hotelId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('hotelId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_travel_has_hotel_dto_1.UpdateTravelHasHotelDto]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':travelId/:hotelId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('hotelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('travel/:travelId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "removeAllByTravel", null);
__decorate([
    (0, common_1.Delete)('hotel/:hotelId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('hotelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasHotelController.prototype, "removeAllByHotel", null);
exports.TravelHasHotelController = TravelHasHotelController = __decorate([
    (0, common_1.Controller)('travel-has-hotel'),
    __metadata("design:paramtypes", [travel_has_hotel_service_1.TravelHasHotelService])
], TravelHasHotelController);
//# sourceMappingURL=travel-has-hotel.controller.js.map
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
exports.TravelHasFlightController = void 0;
const common_1 = require("@nestjs/common");
const travel_has_flight_service_1 = require("./travel-has-flight.service");
const create_travel_has_flight_dto_1 = require("./dto/create-travel-has-flight.dto");
const update_travel_has_flight_dto_1 = require("./dto/update-travel-has-flight.dto");
const travel_has_flight_entity_1 = require("../entities/travel-has-flight.entity");
let TravelHasFlightController = class TravelHasFlightController {
    constructor(travelHasFlightService) {
        this.travelHasFlightService = travelHasFlightService;
    }
    create(createTravelHasFlightDto) {
        return this.travelHasFlightService.create(createTravelHasFlightDto);
    }
    findAll() {
        return this.travelHasFlightService.findAll();
    }
    findByTravel(travelId) {
        return this.travelHasFlightService.findByTravel(travelId);
    }
    async countByTravel(travelId) {
        const count = await this.travelHasFlightService.countByTravel(travelId);
        return { count };
    }
    findByFlightType(travelId, flightType) {
        return this.travelHasFlightService.findByFlightType(travelId, flightType);
    }
    async countByFlightType(travelId, flightType) {
        const count = await this.travelHasFlightService.countByFlightType(travelId, flightType);
        return { count };
    }
    findByFlight(flightId) {
        return this.travelHasFlightService.findByFlight(flightId);
    }
    async countByFlight(flightId) {
        const count = await this.travelHasFlightService.countByFlight(flightId);
        return { count };
    }
    findOne(travelId, flightId) {
        return this.travelHasFlightService.findOne(travelId, flightId);
    }
    update(travelId, flightId, updateTravelHasFlightDto) {
        return this.travelHasFlightService.update(travelId, flightId, updateTravelHasFlightDto);
    }
    remove(travelId, flightId) {
        return this.travelHasFlightService.remove(travelId, flightId);
    }
    removeAllByTravel(travelId) {
        return this.travelHasFlightService.removeAllByTravel(travelId);
    }
    removeAllByFlight(flightId) {
        return this.travelHasFlightService.removeAllByFlight(flightId);
    }
};
exports.TravelHasFlightController = TravelHasFlightController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_has_flight_dto_1.CreateTravelHasFlightDto]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('travel/:travelId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "findByTravel", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/count'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelHasFlightController.prototype, "countByTravel", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/type/:flightType'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('flightType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "findByFlightType", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/type/:flightType/count'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('flightType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TravelHasFlightController.prototype, "countByFlightType", null);
__decorate([
    (0, common_1.Get)('flight/:flightId'),
    __param(0, (0, common_1.Param)('flightId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "findByFlight", null);
__decorate([
    (0, common_1.Get)('flight/:flightId/count'),
    __param(0, (0, common_1.Param)('flightId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelHasFlightController.prototype, "countByFlight", null);
__decorate([
    (0, common_1.Get)(':travelId/:flightId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('flightId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':travelId/:flightId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('flightId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_travel_has_flight_dto_1.UpdateTravelHasFlightDto]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':travelId/:flightId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('flightId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('travel/:travelId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "removeAllByTravel", null);
__decorate([
    (0, common_1.Delete)('flight/:flightId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('flightId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasFlightController.prototype, "removeAllByFlight", null);
exports.TravelHasFlightController = TravelHasFlightController = __decorate([
    (0, common_1.Controller)('travel-has-flight'),
    __metadata("design:paramtypes", [travel_has_flight_service_1.TravelHasFlightService])
], TravelHasFlightController);
//# sourceMappingURL=travel-has-flight.controller.js.map
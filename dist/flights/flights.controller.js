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
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flights_service_1 = require("./flights.service");
const create_flights_dto_1 = require("./dto/create-flights.dto");
const update_flights_dto_1 = require("./dto/update-flights.dto");
const flights_entity_1 = require("../entities/flights.entity");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    create(createFlightDto) {
        return this.flightService.create(createFlightDto);
    }
    findAll() {
        return this.flightService.findAll();
    }
    findByUser(userId) {
        return this.flightService.findByUser(userId);
    }
    findUpcomingByUser(userId) {
        return this.flightService.findUpcomingByUser(userId);
    }
    async getTotalCostByUser(userId) {
        const total = await this.flightService.getTotalCostByUser(userId);
        return { total };
    }
    async countByUser(userId) {
        const count = await this.flightService.countByUser(userId);
        return { count };
    }
    findByStatus(status) {
        return this.flightService.findByStatus(status);
    }
    async countByStatus(status) {
        const count = await this.flightService.countByStatus(status);
        return { count };
    }
    findByClass(flightClass) {
        return this.flightService.findByClass(flightClass);
    }
    findByAirline(airline) {
        return this.flightService.findByAirline(airline);
    }
    findByOrigin(origin) {
        return this.flightService.findByOrigin(origin);
    }
    findByDestination(destination) {
        return this.flightService.findByDestination(destination);
    }
    findByRoute(origin, destination) {
        return this.flightService.findByRoute(origin, destination);
    }
    findByDateRange(startDate, endDate) {
        return this.flightService.findByDateRange(new Date(startDate), new Date(endDate));
    }
    findOne(id) {
        return this.flightService.findOne(id);
    }
    update(id, updateFlightDto) {
        return this.flightService.update(id, updateFlightDto);
    }
    updateStatus(id, body) {
        return this.flightService.updateStatus(id, body.status);
    }
    cancelFlight(id) {
        return this.flightService.cancelFlight(id);
    }
    confirmFlight(id) {
        return this.flightService.confirmFlight(id);
    }
    completeFlight(id) {
        return this.flightService.completeFlight(id);
    }
    remove(id) {
        return this.flightService.remove(id);
    }
};
exports.FlightController = FlightController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flights_dto_1.CreateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/upcoming'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findUpcomingByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/total-cost'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getTotalCostByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)('status/:status/count'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "countByStatus", null);
__decorate([
    (0, common_1.Get)('class/:class'),
    __param(0, (0, common_1.Param)('class')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByClass", null);
__decorate([
    (0, common_1.Get)('airline/:airline'),
    __param(0, (0, common_1.Param)('airline')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByAirline", null);
__decorate([
    (0, common_1.Get)('origin/:origin'),
    __param(0, (0, common_1.Param)('origin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByOrigin", null);
__decorate([
    (0, common_1.Get)('destination/:destination'),
    __param(0, (0, common_1.Param)('destination')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByDestination", null);
__decorate([
    (0, common_1.Get)('route'),
    __param(0, (0, common_1.Query)('origin')),
    __param(1, (0, common_1.Query)('destination')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByRoute", null);
__decorate([
    (0, common_1.Get)('date-range'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findByDateRange", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_flights_dto_1.UpdateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "cancelFlight", null);
__decorate([
    (0, common_1.Patch)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "confirmFlight", null);
__decorate([
    (0, common_1.Patch)(':id/complete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "completeFlight", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "remove", null);
exports.FlightController = FlightController = __decorate([
    (0, common_1.Controller)('flights'),
    __metadata("design:paramtypes", [flights_service_1.FlightService])
], FlightController);
//# sourceMappingURL=flights.controller.js.map
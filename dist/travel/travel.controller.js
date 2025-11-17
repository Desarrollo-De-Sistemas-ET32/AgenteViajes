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
exports.TravelController = void 0;
const common_1 = require("@nestjs/common");
const travel_service_1 = require("./travel.service");
const create_travel_dto_1 = require("./dto/create-travel.dto");
const update_travel_dto_1 = require("./dto/update-travel.dto");
const travel_entity_1 = require("../entities/travel.entity");
let TravelController = class TravelController {
    constructor(travelService) {
        this.travelService = travelService;
    }
    create(createTravelDto) {
        return this.travelService.create(createTravelDto);
    }
    findAll() {
        return this.travelService.findAll();
    }
    findUpcoming() {
        return this.travelService.findUpcoming();
    }
    findPast() {
        return this.travelService.findPast();
    }
    findByStatus(status) {
        return this.travelService.findByStatus(status);
    }
    countByStatus(status) {
        return this.travelService.countByStatus(status);
    }
    findByDestination(destination) {
        return this.travelService.findByDestination(destination);
    }
    findByTravelStyle(travelStyle) {
        return this.travelService.findByTravelStyle(travelStyle);
    }
    findByAccommodationType(accommodationType) {
        return this.travelService.findByAccommodationType(accommodationType);
    }
    findByDateRange(startDate, endDate) {
        return this.travelService.findByDateRange(new Date(startDate), new Date(endDate));
    }
    findByUser(userId) {
        return this.travelService.findByUser(userId);
    }
    countByUser(userId) {
        return this.travelService.countByUser(userId);
    }
    getTotalCostByUser(userId) {
        return this.travelService.getTotalCostByUser(userId);
    }
    findOne(id) {
        return this.travelService.findOne(id);
    }
    findWithRelations(id) {
        return this.travelService.findWithRelations(id);
    }
    update(id, updateTravelDto) {
        return this.travelService.update(id, updateTravelDto);
    }
    updateStatus(id, status) {
        return this.travelService.updateStatus(id, status);
    }
    remove(id) {
        return this.travelService.remove(id);
    }
};
exports.TravelController = TravelController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_dto_1.CreateTravelDto]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('upcoming'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findUpcoming", null);
__decorate([
    (0, common_1.Get)('past'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findPast", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)('status/:status/count'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "countByStatus", null);
__decorate([
    (0, common_1.Get)('destination/:destination'),
    __param(0, (0, common_1.Param)('destination')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findByDestination", null);
__decorate([
    (0, common_1.Get)('travel-style/:travelStyle'),
    __param(0, (0, common_1.Param)('travelStyle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findByTravelStyle", null);
__decorate([
    (0, common_1.Get)('accommodation-type/:accommodationType'),
    __param(0, (0, common_1.Param)('accommodationType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findByAccommodationType", null);
__decorate([
    (0, common_1.Get)('date-range'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findByDateRange", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/total-cost'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "getTotalCostByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/relations'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findWithRelations", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_travel_dto_1.UpdateTravelDto]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "remove", null);
exports.TravelController = TravelController = __decorate([
    (0, common_1.Controller)('travels'),
    __metadata("design:paramtypes", [travel_service_1.TravelService])
], TravelController);
//# sourceMappingURL=travel.controller.js.map
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
exports.TravelCompanionController = void 0;
const common_1 = require("@nestjs/common");
const travel_companion_service_1 = require("./travel-companion.service");
const create_travel_companion_dto_1 = require("./dto/create-travel-companion.dto");
const update_travel_companion_dto_1 = require("./dto/update-travel-companion.dto");
let TravelCompanionController = class TravelCompanionController {
    constructor(travelCompanionService) {
        this.travelCompanionService = travelCompanionService;
    }
    create(createTravelCompanionDto) {
        return this.travelCompanionService.create(createTravelCompanionDto);
    }
    findAll() {
        return this.travelCompanionService.findAll();
    }
    findByTravel(travelId) {
        return this.travelCompanionService.findByTravel(travelId);
    }
    async countByTravel(travelId) {
        const count = await this.travelCompanionService.countByTravel(travelId);
        return { count };
    }
    async hasEmail(travelId, email) {
        const hasEmail = await this.travelCompanionService.hasEmail(travelId, email);
        return { hasEmail };
    }
    findByRelationship(relationship) {
        return this.travelCompanionService.findByRelationship(relationship);
    }
    async countByRelationship(relationship) {
        const count = await this.travelCompanionService.countByRelationship(relationship);
        return { count };
    }
    findByEmail(email) {
        return this.travelCompanionService.findByEmail(email);
    }
    searchByName(name) {
        return this.travelCompanionService.searchByName(name);
    }
    findOne(id) {
        return this.travelCompanionService.findOne(id);
    }
    async getFullName(id) {
        const fullName = await this.travelCompanionService.getFullName(id);
        return { fullName };
    }
    update(id, updateTravelCompanionDto) {
        return this.travelCompanionService.update(id, updateTravelCompanionDto);
    }
    remove(id) {
        return this.travelCompanionService.remove(id);
    }
    removeAllByTravel(travelId) {
        return this.travelCompanionService.removeAllByTravel(travelId);
    }
};
exports.TravelCompanionController = TravelCompanionController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_companion_dto_1.CreateTravelCompanionDto]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('travel/:travelId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "findByTravel", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/count'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelCompanionController.prototype, "countByTravel", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/has-email'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TravelCompanionController.prototype, "hasEmail", null);
__decorate([
    (0, common_1.Get)('relationship/:relationship'),
    __param(0, (0, common_1.Param)('relationship')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "findByRelationship", null);
__decorate([
    (0, common_1.Get)('relationship/:relationship/count'),
    __param(0, (0, common_1.Param)('relationship')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TravelCompanionController.prototype, "countByRelationship", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/full-name'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TravelCompanionController.prototype, "getFullName", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_travel_companion_dto_1.UpdateTravelCompanionDto]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('travel/:travelId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelCompanionController.prototype, "removeAllByTravel", null);
exports.TravelCompanionController = TravelCompanionController = __decorate([
    (0, common_1.Controller)('travel-companion'),
    __metadata("design:paramtypes", [travel_companion_service_1.TravelCompanionService])
], TravelCompanionController);
//# sourceMappingURL=travel-companion.controller.js.map
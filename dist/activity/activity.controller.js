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
exports.ActivityController = void 0;
const common_1 = require("@nestjs/common");
const activity_service_1 = require("./activity.service");
const create_activity_dto_1 = require("./dto/create-activity.dto");
const update_activity_dto_1 = require("./dto/update-activity.dto");
const activity_entity_1 = require("../entities/activity.entity");
let ActivityController = class ActivityController {
    constructor(activityService) {
        this.activityService = activityService;
    }
    create(createActivityDto) {
        return this.activityService.create(createActivityDto);
    }
    findAll() {
        return this.activityService.findAll();
    }
    findTopRated(limit) {
        return this.activityService.findTopRated(limit || 10);
    }
    searchByName(searchTerm) {
        return this.activityService.searchByName(searchTerm);
    }
    findByCity(cityId) {
        return this.activityService.findByCity(cityId);
    }
    countByCity(cityId) {
        return this.activityService.countByCity(cityId);
    }
    getAverageRatingByCity(cityId) {
        return this.activityService.getAverageRatingByCity(cityId);
    }
    findByCategory(category) {
        return this.activityService.findByCategory(category);
    }
    countByCategory(category) {
        return this.activityService.countByCategory(category);
    }
    findByCategoryAndCity(category, cityId) {
        return this.activityService.findByCategoryAndCity(category, cityId);
    }
    findByMinRating(minRating) {
        return this.activityService.findByMinRating(minRating);
    }
    findByCostRange(minCost, maxCost) {
        return this.activityService.findByCostRange(minCost, maxCost);
    }
    getAverageRating() {
        return this.activityService.getAverageRating();
    }
    getAverageCost() {
        return this.activityService.getAverageCost();
    }
    findOne(id) {
        return this.activityService.findOne(id);
    }
    findWithTravels(id) {
        return this.activityService.findWithTravels(id);
    }
    update(id, updateActivityDto) {
        return this.activityService.update(id, updateActivityDto);
    }
    updateRating(id, rating) {
        return this.activityService.updateRating(id, rating);
    }
    remove(id) {
        return this.activityService.remove(id);
    }
};
exports.ActivityController = ActivityController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_activity_dto_1.CreateActivityDto]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('top-rated'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findTopRated", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Get)('city/:cityId'),
    __param(0, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findByCity", null);
__decorate([
    (0, common_1.Get)('city/:cityId/count'),
    __param(0, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "countByCity", null);
__decorate([
    (0, common_1.Get)('city/:cityId/average-rating'),
    __param(0, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "getAverageRatingByCity", null);
__decorate([
    (0, common_1.Get)('category/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.Get)('category/:category/count'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "countByCategory", null);
__decorate([
    (0, common_1.Get)('category/:category/city/:cityId'),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Param)('cityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findByCategoryAndCity", null);
__decorate([
    (0, common_1.Get)('min-rating/:minRating'),
    __param(0, (0, common_1.Param)('minRating', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findByMinRating", null);
__decorate([
    (0, common_1.Get)('cost-range'),
    __param(0, (0, common_1.Query)('min', common_1.ParseFloatPipe)),
    __param(1, (0, common_1.Query)('max', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findByCostRange", null);
__decorate([
    (0, common_1.Get)('average-rating'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "getAverageRating", null);
__decorate([
    (0, common_1.Get)('average-cost'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "getAverageCost", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/travels'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "findWithTravels", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_activity_dto_1.UpdateActivityDto]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/rating'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('rating', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "updateRating", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "remove", null);
exports.ActivityController = ActivityController = __decorate([
    (0, common_1.Controller)('activities'),
    __metadata("design:paramtypes", [activity_service_1.ActivityService])
], ActivityController);
//# sourceMappingURL=activity.controller.js.map
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
exports.TravelHasActivityController = void 0;
const common_1 = require("@nestjs/common");
const travel_has_activity_service_1 = require("./travel-has-activity.service");
const create_travel_has_activity_dto_1 = require("./dto/create-travel-has-activity.dto");
const update_travel_has_activity_dto_1 = require("./dto/update-travel-has-activity.dto");
let TravelHasActivityController = class TravelHasActivityController {
    constructor(travelHasActivityService) {
        this.travelHasActivityService = travelHasActivityService;
    }
    create(createTravelHasActivityDto) {
        return this.travelHasActivityService.create(createTravelHasActivityDto);
    }
    findAll() {
        return this.travelHasActivityService.findAll();
    }
    findOne(travelId, activityId) {
        return this.travelHasActivityService.findOne(travelId, activityId);
    }
    findByTravel(travelId) {
        return this.travelHasActivityService.findByTravel(travelId);
    }
    findByActivity(activityId) {
        return this.travelHasActivityService.findByActivity(activityId);
    }
    findByTravelWithDate(travelId, startDate, endDate) {
        return this.travelHasActivityService.findByTravelWithDate(travelId, new Date(startDate), new Date(endDate));
    }
    countActivitiesByTravel(travelId) {
        return this.travelHasActivityService.countActivitiesByTravel(travelId);
    }
    countTravelsByActivity(activityId) {
        return this.travelHasActivityService.countTravelsByActivity(activityId);
    }
    getTotalParticipantsByTravel(travelId) {
        return this.travelHasActivityService.getTotalParticipantsByTravel(travelId);
    }
    update(travelId, activityId, updateTravelHasActivityDto) {
        return this.travelHasActivityService.update(travelId, activityId, updateTravelHasActivityDto);
    }
    remove(travelId, activityId) {
        return this.travelHasActivityService.remove(travelId, activityId);
    }
    removeAllByTravel(travelId) {
        return this.travelHasActivityService.removeAllByTravel(travelId);
    }
    removeAllByActivity(activityId) {
        return this.travelHasActivityService.removeAllByActivity(activityId);
    }
};
exports.TravelHasActivityController = TravelHasActivityController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_has_activity_dto_1.CreateTravelHasActivityDto]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':travelId/:activityId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('activityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('travel/:travelId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "findByTravel", null);
__decorate([
    (0, common_1.Get)('activity/:activityId'),
    __param(0, (0, common_1.Param)('activityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "findByActivity", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/date-range'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "findByTravelWithDate", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/count'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "countActivitiesByTravel", null);
__decorate([
    (0, common_1.Get)('activity/:activityId/count'),
    __param(0, (0, common_1.Param)('activityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "countTravelsByActivity", null);
__decorate([
    (0, common_1.Get)('travel/:travelId/total-participants'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "getTotalParticipantsByTravel", null);
__decorate([
    (0, common_1.Patch)(':travelId/:activityId'),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('activityId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_travel_has_activity_dto_1.UpdateTravelHasActivityDto]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':travelId/:activityId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('activityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('travel/:travelId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('travelId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "removeAllByTravel", null);
__decorate([
    (0, common_1.Delete)('activity/:activityId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('activityId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TravelHasActivityController.prototype, "removeAllByActivity", null);
exports.TravelHasActivityController = TravelHasActivityController = __decorate([
    (0, common_1.Controller)('travel-has-activity'),
    __metadata("design:paramtypes", [travel_has_activity_service_1.TravelHasActivityService])
], TravelHasActivityController);
//# sourceMappingURL=travel-has-activity.controller.js.map
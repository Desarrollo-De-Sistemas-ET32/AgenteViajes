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
exports.UserTravelInterestsController = void 0;
const common_1 = require("@nestjs/common");
const user_travel_interests_service_1 = require("./user-travel-interests.service");
const create_user_travel_interests_dto_1 = require("./dto/create-user-travel-interests.dto");
const update_user_travel_interests_dto_1 = require("./dto/update-user-travel-interests.dto");
const user_travel_interests_entity_1 = require("../entities/user-travel-interests.entity");
let UserTravelInterestsController = class UserTravelInterestsController {
    constructor(userTravelInterestsService) {
        this.userTravelInterestsService = userTravelInterestsService;
    }
    create(createUserTravelInterestDto) {
        return this.userTravelInterestsService.create(createUserTravelInterestDto);
    }
    findAll() {
        return this.userTravelInterestsService.findAll();
    }
    findByUser(userId) {
        return this.userTravelInterestsService.findByUser(userId);
    }
    async countByUser(userId) {
        const count = await this.userTravelInterestsService.countByUser(userId);
        return { count };
    }
    getUserInterestCategories(userId) {
        return this.userTravelInterestsService.getUserInterestCategories(userId);
    }
    findTopPrioritiesByUser(userId, limit = 5) {
        return this.userTravelInterestsService.findTopPrioritiesByUser(userId, limit);
    }
    async getAveragePriorityByUser(userId) {
        const average = await this.userTravelInterestsService.getAveragePriorityByUser(userId);
        return { average };
    }
    findByPriority(userId, priority) {
        return this.userTravelInterestsService.findByPriority(userId, priority);
    }
    findByUserAndCategory(userId, interestCategory) {
        return this.userTravelInterestsService.findByUserAndCategory(userId, interestCategory);
    }
    async hasInterest(userId, interestCategory) {
        const hasInterest = await this.userTravelInterestsService.hasInterest(userId, interestCategory);
        return { hasInterest };
    }
    findByCategory(interestCategory) {
        return this.userTravelInterestsService.findByCategory(interestCategory);
    }
    async countByCategory(interestCategory) {
        const count = await this.userTravelInterestsService.countByCategory(interestCategory);
        return { count };
    }
    findOne(id) {
        return this.userTravelInterestsService.findOne(id);
    }
    update(id, updateUserTravelInterestDto) {
        return this.userTravelInterestsService.update(id, updateUserTravelInterestDto);
    }
    updatePriority(id, body) {
        return this.userTravelInterestsService.updatePriority(id, body.priority);
    }
    remove(id) {
        return this.userTravelInterestsService.remove(id);
    }
    removeAllByUser(userId) {
        return this.userTravelInterestsService.removeAllByUser(userId);
    }
};
exports.UserTravelInterestsController = UserTravelInterestsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_travel_interests_dto_1.CreateUserTravelInterestDto]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserTravelInterestsController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/categories'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "getUserInterestCategories", null);
__decorate([
    (0, common_1.Get)('user/:userId/top-priorities'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findTopPrioritiesByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/average-priority'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserTravelInterestsController.prototype, "getAveragePriorityByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/priority/:priority'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('priority', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findByPriority", null);
__decorate([
    (0, common_1.Get)('user/:userId/category/:category'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findByUserAndCategory", null);
__decorate([
    (0, common_1.Get)('user/:userId/has/:category'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserTravelInterestsController.prototype, "hasInterest", null);
__decorate([
    (0, common_1.Get)('category/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.Get)('category/:category/count'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserTravelInterestsController.prototype, "countByCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_travel_interests_dto_1.UpdateUserTravelInterestDto]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/priority'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "updatePriority", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('user/:userId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserTravelInterestsController.prototype, "removeAllByUser", null);
exports.UserTravelInterestsController = UserTravelInterestsController = __decorate([
    (0, common_1.Controller)('user-travel-interests'),
    __metadata("design:paramtypes", [user_travel_interests_service_1.UserTravelInterestsService])
], UserTravelInterestsController);
//# sourceMappingURL=user-travel-interests.controller.js.map
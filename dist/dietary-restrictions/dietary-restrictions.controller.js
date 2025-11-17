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
exports.DietaryRestrictionsController = void 0;
const common_1 = require("@nestjs/common");
const dietary_restrictions_service_1 = require("./dietary-restrictions.service");
const create_dietary_restrictions_dto_1 = require("./dto/create-dietary-restrictions.dto");
const update_dietary_restrictions_dto_1 = require("./dto/update-dietary-restrictions.dto");
const dietary_restrictions_entity_1 = require("../entities/dietary-restrictions.entity");
let DietaryRestrictionsController = class DietaryRestrictionsController {
    constructor(dietaryRestrictionsService) {
        this.dietaryRestrictionsService = dietaryRestrictionsService;
    }
    create(createDietaryRestrictionDto) {
        return this.dietaryRestrictionsService.create(createDietaryRestrictionDto);
    }
    findAll() {
        return this.dietaryRestrictionsService.findAll();
    }
    findByUser(userId) {
        return this.dietaryRestrictionsService.findByUser(userId);
    }
    async countByUser(userId) {
        const count = await this.dietaryRestrictionsService.countByUser(userId);
        return { count };
    }
    getUserRestrictionTypes(userId) {
        return this.dietaryRestrictionsService.getUserRestrictionTypes(userId);
    }
    findByUserAndType(userId, restrictionType) {
        return this.dietaryRestrictionsService.findByUserAndType(userId, restrictionType);
    }
    async hasRestriction(userId, restrictionType) {
        const hasRestriction = await this.dietaryRestrictionsService.hasRestriction(userId, restrictionType);
        return { hasRestriction };
    }
    findByType(restrictionType) {
        return this.dietaryRestrictionsService.findByType(restrictionType);
    }
    async countByType(restrictionType) {
        const count = await this.dietaryRestrictionsService.countByType(restrictionType);
        return { count };
    }
    findOne(id) {
        return this.dietaryRestrictionsService.findOne(id);
    }
    update(id, updateDietaryRestrictionDto) {
        return this.dietaryRestrictionsService.update(id, updateDietaryRestrictionDto);
    }
    remove(id) {
        return this.dietaryRestrictionsService.remove(id);
    }
    removeAllByUser(userId) {
        return this.dietaryRestrictionsService.removeAllByUser(userId);
    }
};
exports.DietaryRestrictionsController = DietaryRestrictionsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dietary_restrictions_dto_1.CreateDietaryRestrictionDto]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DietaryRestrictionsController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/types'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "getUserRestrictionTypes", null);
__decorate([
    (0, common_1.Get)('user/:userId/type/:type'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "findByUserAndType", null);
__decorate([
    (0, common_1.Get)('user/:userId/has/:type'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DietaryRestrictionsController.prototype, "hasRestriction", null);
__decorate([
    (0, common_1.Get)('type/:type'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "findByType", null);
__decorate([
    (0, common_1.Get)('type/:type/count'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DietaryRestrictionsController.prototype, "countByType", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dietary_restrictions_dto_1.UpdateDietaryRestrictionDto]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('user/:userId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DietaryRestrictionsController.prototype, "removeAllByUser", null);
exports.DietaryRestrictionsController = DietaryRestrictionsController = __decorate([
    (0, common_1.Controller)('dietary-restrictions'),
    __metadata("design:paramtypes", [dietary_restrictions_service_1.DietaryRestrictionsService])
], DietaryRestrictionsController);
//# sourceMappingURL=dietary-restrictions.controller.js.map
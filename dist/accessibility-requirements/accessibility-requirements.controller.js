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
exports.AccessibilityRequirementsController = void 0;
const common_1 = require("@nestjs/common");
const accessibility_requirements_service_1 = require("./accessibility-requirements.service");
const create_accessibility_requirements_dto_1 = require("./dto/create-accessibility-requirements.dto");
const update_accessibility_requirements_dto_1 = require("./dto/update-accessibility-requirements.dto");
const accessibility_requirements_entity_1 = require("../entities/accessibility-requirements.entity");
let AccessibilityRequirementsController = class AccessibilityRequirementsController {
    constructor(accessibilityRequirementsService) {
        this.accessibilityRequirementsService = accessibilityRequirementsService;
    }
    create(createAccessibilityRequirementDto) {
        return this.accessibilityRequirementsService.create(createAccessibilityRequirementDto);
    }
    findAll() {
        return this.accessibilityRequirementsService.findAll();
    }
    findByUser(userId) {
        return this.accessibilityRequirementsService.findByUser(userId);
    }
    async countByUser(userId) {
        const count = await this.accessibilityRequirementsService.countByUser(userId);
        return { count };
    }
    findByUserAndType(userId, requirementType) {
        return this.accessibilityRequirementsService.findByUserAndType(userId, requirementType);
    }
    async hasRequirement(userId, requirementType) {
        const hasRequirement = await this.accessibilityRequirementsService.hasRequirement(userId, requirementType);
        return { hasRequirement };
    }
    findByType(requirementType) {
        return this.accessibilityRequirementsService.findByType(requirementType);
    }
    async countByType(requirementType) {
        const count = await this.accessibilityRequirementsService.countByType(requirementType);
        return { count };
    }
    findOne(id) {
        return this.accessibilityRequirementsService.findOne(id);
    }
    update(id, updateAccessibilityRequirementDto) {
        return this.accessibilityRequirementsService.update(id, updateAccessibilityRequirementDto);
    }
    remove(id) {
        return this.accessibilityRequirementsService.remove(id);
    }
    removeAllByUser(userId) {
        return this.accessibilityRequirementsService.removeAllByUser(userId);
    }
};
exports.AccessibilityRequirementsController = AccessibilityRequirementsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_accessibility_requirements_dto_1.CreateAccessibilityRequirementDto]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccessibilityRequirementsController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/type/:type'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "findByUserAndType", null);
__decorate([
    (0, common_1.Get)('user/:userId/has/:type'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], AccessibilityRequirementsController.prototype, "hasRequirement", null);
__decorate([
    (0, common_1.Get)('type/:type'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "findByType", null);
__decorate([
    (0, common_1.Get)('type/:type/count'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessibilityRequirementsController.prototype, "countByType", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_accessibility_requirements_dto_1.UpdateAccessibilityRequirementDto]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('user/:userId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AccessibilityRequirementsController.prototype, "removeAllByUser", null);
exports.AccessibilityRequirementsController = AccessibilityRequirementsController = __decorate([
    (0, common_1.Controller)('accessibility-requirements'),
    __metadata("design:paramtypes", [accessibility_requirements_service_1.AccessibilityRequirementsService])
], AccessibilityRequirementsController);
//# sourceMappingURL=accessibility-requirements.controller.js.map
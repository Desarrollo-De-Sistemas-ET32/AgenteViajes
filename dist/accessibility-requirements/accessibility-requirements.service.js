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
exports.AccessibilityRequirementsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const accessibility_requirements_entity_1 = require("../entities/accessibility-requirements.entity");
let AccessibilityRequirementsService = class AccessibilityRequirementsService {
    constructor(accessibilityRequirementRepository) {
        this.accessibilityRequirementRepository = accessibilityRequirementRepository;
    }
    async create(createAccessibilityRequirementDto) {
        const requirement = this.accessibilityRequirementRepository.create(createAccessibilityRequirementDto);
        return await this.accessibilityRequirementRepository.save(requirement);
    }
    async findAll() {
        return await this.accessibilityRequirementRepository.find({
            relations: ['user'],
            order: { idAccessibility: 'DESC' },
        });
    }
    async findOne(id) {
        const requirement = await this.accessibilityRequirementRepository.findOne({
            where: { idAccessibility: id },
            relations: ['user'],
        });
        if (!requirement) {
            throw new common_1.NotFoundException(`Accessibility Requirement with ID ${id} not found`);
        }
        return requirement;
    }
    async findByUser(userId) {
        return await this.accessibilityRequirementRepository.find({
            where: { idUser: userId },
            order: { idAccessibility: 'DESC' },
        });
    }
    async findByType(requirementType) {
        return await this.accessibilityRequirementRepository.find({
            where: { requirementType },
            relations: ['user'],
            order: { idAccessibility: 'DESC' },
        });
    }
    async findByUserAndType(userId, requirementType) {
        return await this.accessibilityRequirementRepository.find({
            where: { idUser: userId, requirementType },
            order: { idAccessibility: 'DESC' },
        });
    }
    async update(id, updateAccessibilityRequirementDto) {
        const requirement = await this.findOne(id);
        Object.assign(requirement, updateAccessibilityRequirementDto);
        return await this.accessibilityRequirementRepository.save(requirement);
    }
    async remove(id) {
        const requirement = await this.findOne(id);
        await this.accessibilityRequirementRepository.remove(requirement);
    }
    async removeAllByUser(userId) {
        const requirements = await this.findByUser(userId);
        if (requirements.length > 0) {
            await this.accessibilityRequirementRepository.remove(requirements);
        }
    }
    async countByUser(userId) {
        return await this.accessibilityRequirementRepository.count({
            where: { idUser: userId },
        });
    }
    async countByType(requirementType) {
        return await this.accessibilityRequirementRepository.count({
            where: { requirementType },
        });
    }
    async hasRequirement(userId, requirementType) {
        const count = await this.accessibilityRequirementRepository.count({
            where: { idUser: userId, requirementType },
        });
        return count > 0;
    }
};
exports.AccessibilityRequirementsService = AccessibilityRequirementsService;
exports.AccessibilityRequirementsService = AccessibilityRequirementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(accessibility_requirements_entity_1.AccessibilityRequirement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccessibilityRequirementsService);
//# sourceMappingURL=accessibility-requirements.service.js.map
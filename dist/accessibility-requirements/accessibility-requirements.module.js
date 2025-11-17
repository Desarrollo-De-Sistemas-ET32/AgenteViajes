"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessibilityRequirementsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const accessibility_requirements_service_1 = require("./accessibility-requirements.service");
const accessibility_requirements_controller_1 = require("./accessibility-requirements.controller");
const accessibility_requirements_entity_1 = require("../entities/accessibility-requirements.entity");
let AccessibilityRequirementsModule = class AccessibilityRequirementsModule {
};
exports.AccessibilityRequirementsModule = AccessibilityRequirementsModule;
exports.AccessibilityRequirementsModule = AccessibilityRequirementsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([accessibility_requirements_entity_1.AccessibilityRequirement])],
        controllers: [accessibility_requirements_controller_1.AccessibilityRequirementsController],
        providers: [accessibility_requirements_service_1.AccessibilityRequirementsService],
        exports: [accessibility_requirements_service_1.AccessibilityRequirementsService],
    })
], AccessibilityRequirementsModule);
//# sourceMappingURL=accessibility-requirements.module.js.map
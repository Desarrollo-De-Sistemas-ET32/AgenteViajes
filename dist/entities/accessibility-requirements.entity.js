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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessibilityRequirement = exports.RequirementType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var RequirementType;
(function (RequirementType) {
    RequirementType["WHEELCHAIR"] = "Acceso para silla de ruedas";
    RequirementType["VISUAL"] = "Asistencia visual";
    RequirementType["HEARING"] = "Asistencia auditiva";
})(RequirementType || (exports.RequirementType = RequirementType = {}));
let AccessibilityRequirement = class AccessibilityRequirement {
};
exports.AccessibilityRequirement = AccessibilityRequirement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Accessibility' }),
    __metadata("design:type", Number)
], AccessibilityRequirement.prototype, "idAccessibility", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], AccessibilityRequirement.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Requirement_Type',
        type: 'enum',
        enum: RequirementType
    }),
    __metadata("design:type", String)
], AccessibilityRequirement.prototype, "requirementType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Details', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AccessibilityRequirement.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], AccessibilityRequirement.prototype, "user", void 0);
exports.AccessibilityRequirement = AccessibilityRequirement = __decorate([
    (0, typeorm_1.Entity)('Accessibility_Requirements')
], AccessibilityRequirement);
//# sourceMappingURL=accessibility-requirements.entity.js.map
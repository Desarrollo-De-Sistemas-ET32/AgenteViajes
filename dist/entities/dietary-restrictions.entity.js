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
exports.DietaryRestriction = exports.RestrictionType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var RestrictionType;
(function (RestrictionType) {
    RestrictionType["VEGETARIAN"] = "Vegetariano";
    RestrictionType["VEGAN"] = "Vegano";
    RestrictionType["GLUTEN_FREE"] = "Sin gluten";
    RestrictionType["FOOD_ALLERGIES"] = "Al\u00E9rgico alimentarios";
})(RestrictionType || (exports.RestrictionType = RestrictionType = {}));
let DietaryRestriction = class DietaryRestriction {
};
exports.DietaryRestriction = DietaryRestriction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Restriction' }),
    __metadata("design:type", Number)
], DietaryRestriction.prototype, "idRestriction", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], DietaryRestriction.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Restriction_Type',
        type: 'enum',
        enum: RestrictionType
    }),
    __metadata("design:type", String)
], DietaryRestriction.prototype, "restrictionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Details', type: 'text', nullable: true }),
    __metadata("design:type", String)
], DietaryRestriction.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], DietaryRestriction.prototype, "user", void 0);
exports.DietaryRestriction = DietaryRestriction = __decorate([
    (0, typeorm_1.Entity)('Dietary_Restrictions')
], DietaryRestriction);
//# sourceMappingURL=dietary-restrictions.entity.js.map
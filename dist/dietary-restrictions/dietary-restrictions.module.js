"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietaryRestrictionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dietary_restrictions_service_1 = require("./dietary-restrictions.service");
const dietary_restrictions_controller_1 = require("./dietary-restrictions.controller");
const dietary_restrictions_entity_1 = require("../entities/dietary-restrictions.entity");
let DietaryRestrictionsModule = class DietaryRestrictionsModule {
};
exports.DietaryRestrictionsModule = DietaryRestrictionsModule;
exports.DietaryRestrictionsModule = DietaryRestrictionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dietary_restrictions_entity_1.DietaryRestriction])],
        controllers: [dietary_restrictions_controller_1.DietaryRestrictionsController],
        providers: [dietary_restrictions_service_1.DietaryRestrictionsService],
        exports: [dietary_restrictions_service_1.DietaryRestrictionsService],
    })
], DietaryRestrictionsModule);
//# sourceMappingURL=dietary-restrictions.module.js.map
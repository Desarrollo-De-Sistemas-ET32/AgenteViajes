"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelCompanionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const travel_companion_service_1 = require("./travel-companion.service");
const travel_companion_controller_1 = require("./travel-companion.controller");
const travel_companion_entity_1 = require("../entities/travel-companion.entity");
let TravelCompanionModule = class TravelCompanionModule {
};
exports.TravelCompanionModule = TravelCompanionModule;
exports.TravelCompanionModule = TravelCompanionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([travel_companion_entity_1.TravelCompanion])],
        controllers: [travel_companion_controller_1.TravelCompanionController],
        providers: [travel_companion_service_1.TravelCompanionService],
        exports: [travel_companion_service_1.TravelCompanionService],
    })
], TravelCompanionModule);
//# sourceMappingURL=travel-companion.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelHasActivityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const travel_has_activity_service_1 = require("./travel-has-activity.service");
const travel_has_activity_controller_1 = require("./travel-has-activity.controller");
const travel_has_activity_entity_1 = require("../entities/travel-has-activity.entity");
let TravelHasActivityModule = class TravelHasActivityModule {
};
exports.TravelHasActivityModule = TravelHasActivityModule;
exports.TravelHasActivityModule = TravelHasActivityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([travel_has_activity_entity_1.TravelHasActivity])],
        controllers: [travel_has_activity_controller_1.TravelHasActivityController],
        providers: [travel_has_activity_service_1.TravelHasActivityService],
        exports: [travel_has_activity_service_1.TravelHasActivityService],
    })
], TravelHasActivityModule);
//# sourceMappingURL=travel-has-activity.module.js.map
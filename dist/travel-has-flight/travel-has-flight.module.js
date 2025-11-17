"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelHasFlightModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const travel_has_flight_service_1 = require("./travel-has-flight.service");
const travel_has_flight_controller_1 = require("./travel-has-flight.controller");
const travel_has_flight_entity_1 = require("../entities/travel-has-flight.entity");
let TravelHasFlightModule = class TravelHasFlightModule {
};
exports.TravelHasFlightModule = TravelHasFlightModule;
exports.TravelHasFlightModule = TravelHasFlightModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([travel_has_flight_entity_1.TravelHasFlight])],
        controllers: [travel_has_flight_controller_1.TravelHasFlightController],
        providers: [travel_has_flight_service_1.TravelHasFlightService],
        exports: [travel_has_flight_service_1.TravelHasFlightService],
    })
], TravelHasFlightModule);
//# sourceMappingURL=travel-has-flight.module.js.map
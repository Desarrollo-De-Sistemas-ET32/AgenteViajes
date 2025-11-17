"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelHasHotelModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const travel_has_hotel_service_1 = require("./travel-has-hotel.service");
const travel_has_hotel_controller_1 = require("./travel-has-hotel.controller");
const travel_has_hotel_entity_1 = require("../entities/travel-has-hotel.entity");
let TravelHasHotelModule = class TravelHasHotelModule {
};
exports.TravelHasHotelModule = TravelHasHotelModule;
exports.TravelHasHotelModule = TravelHasHotelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([travel_has_hotel_entity_1.TravelHasHotel])],
        controllers: [travel_has_hotel_controller_1.TravelHasHotelController],
        providers: [travel_has_hotel_service_1.TravelHasHotelService],
        exports: [travel_has_hotel_service_1.TravelHasHotelService],
    })
], TravelHasHotelModule);
//# sourceMappingURL=travel-has-hotel.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hotel_entity_1 = require("./hotel/hotel.entity");
const flights_entity_1 = require("./flights/flights.entity");
const travel_entity_1 = require("./travel/travel.entity");
const hotel_module_1 = require("./hotel/hotel.module");
const flights_module_1 = require("./flights/flights.module");
const travel_module_1 = require("./travel/travel.module");
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'mydb',
                entities: [hotel_entity_1.Hotel, flights_entity_1.Flights, travel_entity_1.Travel, user_entity_1.User],
                synchronize: false,
                logging: true,
            }),
            hotel_module_1.HotelModule,
            flights_module_1.FlightsModule,
            travel_module_1.TravelModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
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
exports.TravelHasFlight = exports.FlightType = void 0;
const typeorm_1 = require("typeorm");
const travel_entity_1 = require("./travel.entity");
const flights_entity_1 = require("./flights.entity");
var FlightType;
(function (FlightType) {
    FlightType["OUTBOUND"] = "Outbound";
    FlightType["RETURN"] = "Return";
    FlightType["CONNECTING"] = "Connecting";
})(FlightType || (exports.FlightType = FlightType = {}));
let TravelHasFlight = class TravelHasFlight {
};
exports.TravelHasFlight = TravelHasFlight;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Travel_ID_Travel', type: 'int' }),
    __metadata("design:type", Number)
], TravelHasFlight.prototype, "travelIdTravel", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Flight_ID_Flight', type: 'int' }),
    __metadata("design:type", Number)
], TravelHasFlight.prototype, "flightIdFlight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Flight_Type',
        type: 'enum',
        enum: FlightType,
        default: FlightType.OUTBOUND
    }),
    __metadata("design:type", String)
], TravelHasFlight.prototype, "flightType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => travel_entity_1.Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Travel_ID_Travel' }),
    __metadata("design:type", travel_entity_1.Travel)
], TravelHasFlight.prototype, "travel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flights_entity_1.Flight, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Flight_ID_Flight' }),
    __metadata("design:type", flights_entity_1.Flight)
], TravelHasFlight.prototype, "flight", void 0);
exports.TravelHasFlight = TravelHasFlight = __decorate([
    (0, typeorm_1.Entity)('Travel_has_Flight')
], TravelHasFlight);
//# sourceMappingURL=travel-has-flight.entity.js.map
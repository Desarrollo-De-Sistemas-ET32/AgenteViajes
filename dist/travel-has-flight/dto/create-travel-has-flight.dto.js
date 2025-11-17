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
exports.CreateTravelHasFlightDto = void 0;
const class_validator_1 = require("class-validator");
const travel_has_flight_entity_1 = require("../../entities/travel-has-flight.entity");
class CreateTravelHasFlightDto {
}
exports.CreateTravelHasFlightDto = CreateTravelHasFlightDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTravelHasFlightDto.prototype, "travelIdTravel", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTravelHasFlightDto.prototype, "flightIdFlight", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(travel_has_flight_entity_1.FlightType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTravelHasFlightDto.prototype, "flightType", void 0);
//# sourceMappingURL=create-travel-has-flight.dto.js.map
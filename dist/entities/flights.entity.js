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
exports.Flight = exports.FlightStatus = exports.FlightClass = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var FlightClass;
(function (FlightClass) {
    FlightClass["ECONOMY"] = "Economy";
    FlightClass["PREMIUM"] = "Premium";
    FlightClass["BUSINESS"] = "Business";
    FlightClass["FIRST"] = "First";
})(FlightClass || (exports.FlightClass = FlightClass = {}));
var FlightStatus;
(function (FlightStatus) {
    FlightStatus["BOOKED"] = "Booked";
    FlightStatus["CONFIRMED"] = "Confirmed";
    FlightStatus["CANCELLED"] = "Cancelled";
    FlightStatus["COMPLETED"] = "Completed";
})(FlightStatus || (exports.FlightStatus = FlightStatus = {}));
let Flight = class Flight {
};
exports.Flight = Flight;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Flight' }),
    __metadata("design:type", Number)
], Flight.prototype, "idFlight", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Flight.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Flight_Number', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Flight.prototype, "flightNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Airline', type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Flight.prototype, "airline", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Origin', type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Flight.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Destination', type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Flight.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Departure_Date', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Flight.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Arrival_Date', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Flight.prototype, "arrivalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Total_cost', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Flight.prototype, "totalCost", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Class',
        type: 'enum',
        enum: FlightClass,
        default: FlightClass.ECONOMY
    }),
    __metadata("design:type", String)
], Flight.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Status',
        type: 'enum',
        enum: FlightStatus,
        default: FlightStatus.BOOKED
    }),
    __metadata("design:type", String)
], Flight.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], Flight.prototype, "user", void 0);
exports.Flight = Flight = __decorate([
    (0, typeorm_1.Entity)('Flights')
], Flight);
//# sourceMappingURL=flights.entity.js.map
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
exports.Flights = void 0;
const typeorm_1 = require("typeorm");
let Flights = class Flights {
    ID_Flight;
    ID_User;
    Start_date;
    End_date;
    Total_cost;
    Destination;
};
exports.Flights = Flights;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Flights.prototype, "ID_Flight", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Flights.prototype, "ID_User", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'datetime' }),
    __metadata("design:type", Date)
], Flights.prototype, "Start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'datetime' }),
    __metadata("design:type", Date)
], Flights.prototype, "End_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Flights.prototype, "Total_cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Flights.prototype, "Destination", void 0);
exports.Flights = Flights = __decorate([
    (0, typeorm_1.Entity)('Flights')
], Flights);
//# sourceMappingURL=flights.entity.js.map
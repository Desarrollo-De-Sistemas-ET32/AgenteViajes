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
exports.Travel = exports.AccommodationType = exports.TravelStyle = exports.TravelStatus = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const travel_companion_entity_1 = require("./travel-companion.entity");
const travel_has_hotel_entity_1 = require("./travel-has-hotel.entity");
const travel_has_flight_entity_1 = require("./travel-has-flight.entity");
const travel_has_activity_entity_1 = require("./travel-has-activity.entity");
var TravelStatus;
(function (TravelStatus) {
    TravelStatus["PLANNING"] = "Planning";
    TravelStatus["CONFIRMED"] = "Confirmed";
    TravelStatus["IN_PROGRESS"] = "In Progress";
    TravelStatus["COMPLETED"] = "Completed";
    TravelStatus["CANCELLED"] = "Cancelled";
})(TravelStatus || (exports.TravelStatus = TravelStatus = {}));
var TravelStyle;
(function (TravelStyle) {
    TravelStyle["PREFERRED"] = "Preferred";
    TravelStyle["ALTERNATIVE"] = "Alternative";
})(TravelStyle || (exports.TravelStyle = TravelStyle = {}));
var AccommodationType;
(function (AccommodationType) {
    AccommodationType["HOTEL_LUJO"] = "Hotel de Lujo";
    AccommodationType["BOUTIQUE_HOTEL"] = "Boutique Hotel";
    AccommodationType["APARTAMENTO"] = "Apartamento";
    AccommodationType["CASA_RURAL"] = "Casa Rural";
    AccommodationType["HOSTAL"] = "Hostal";
})(AccommodationType || (exports.AccommodationType = AccommodationType = {}));
let Travel = class Travel {
};
exports.Travel = Travel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Travel' }),
    __metadata("design:type", Number)
], Travel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', nullable: true }),
    __metadata("design:type", Number)
], Travel.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'Travel_Name' }),
    __metadata("design:type", String)
], Travel.prototype, "travelName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'Destination' }),
    __metadata("design:type", String)
], Travel.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'Start_date' }),
    __metadata("design:type", Date)
], Travel.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'End_date' }),
    __metadata("design:type", Date)
], Travel.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, name: 'Total_cost' }),
    __metadata("design:type", Number)
], Travel.prototype, "totalCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'Document_Path' }),
    __metadata("design:type", String)
], Travel.prototype, "documentPath", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: TravelStatus,
        default: TravelStatus.PLANNING,
        name: 'Status',
    }),
    __metadata("design:type", String)
], Travel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: TravelStyle,
        nullable: true,
        name: 'Travel_Style',
    }),
    __metadata("design:type", String)
], Travel.prototype, "travelStyle", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: AccommodationType,
        nullable: true,
        name: 'Accommodation_Type',
    }),
    __metadata("design:type", String)
], Travel.prototype, "accommodationType", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'Created_At' }),
    __metadata("design:type", Date)
], Travel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], Travel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_companion_entity_1.TravelCompanion, (companion) => companion.travel),
    __metadata("design:type", Array)
], Travel.prototype, "companions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_has_hotel_entity_1.TravelHasHotel, (travelHasHotel) => travelHasHotel.travel),
    __metadata("design:type", Array)
], Travel.prototype, "hotels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_has_flight_entity_1.TravelHasFlight, (travelHasFlight) => travelHasFlight.travel),
    __metadata("design:type", Array)
], Travel.prototype, "flights", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_has_activity_entity_1.TravelHasActivity, (travelHasActivity) => travelHasActivity.travel),
    __metadata("design:type", Array)
], Travel.prototype, "activities", void 0);
exports.Travel = Travel = __decorate([
    (0, typeorm_1.Entity)('Travel')
], Travel);
//# sourceMappingURL=travel.entity.js.map
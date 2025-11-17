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
exports.TravelHasHotel = void 0;
const typeorm_1 = require("typeorm");
const travel_entity_1 = require("./travel.entity");
const hotel_entity_1 = require("./hotel.entity");
let TravelHasHotel = class TravelHasHotel {
};
exports.TravelHasHotel = TravelHasHotel;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Travel_ID_Travel', type: 'int' }),
    __metadata("design:type", Number)
], TravelHasHotel.prototype, "travelIdTravel", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Hotel_ID_Hotel', type: 'int' }),
    __metadata("design:type", Number)
], TravelHasHotel.prototype, "hotelIdHotel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Check_In_Date', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TravelHasHotel.prototype, "checkInDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Check_Out_Date', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TravelHasHotel.prototype, "checkOutDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Room_Type', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], TravelHasHotel.prototype, "roomType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Number_of_Rooms', type: 'int', default: 1 }),
    __metadata("design:type", Number)
], TravelHasHotel.prototype, "numberOfRooms", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => travel_entity_1.Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Travel_ID_Travel' }),
    __metadata("design:type", travel_entity_1.Travel)
], TravelHasHotel.prototype, "travel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hotel_entity_1.Hotel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Hotel_ID_Hotel' }),
    __metadata("design:type", hotel_entity_1.Hotel)
], TravelHasHotel.prototype, "hotel", void 0);
exports.TravelHasHotel = TravelHasHotel = __decorate([
    (0, typeorm_1.Entity)('Travel_has_Hotel')
], TravelHasHotel);
//# sourceMappingURL=travel-has-hotel.entity.js.map
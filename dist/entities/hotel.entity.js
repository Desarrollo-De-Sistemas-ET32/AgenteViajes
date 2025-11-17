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
exports.Hotel = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("./city.entity");
const travel_has_hotel_entity_1 = require("./travel-has-hotel.entity");
let Hotel = class Hotel {
};
exports.Hotel = Hotel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Hotel' }),
    __metadata("design:type", Number)
], Hotel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'Hotel_name' }),
    __metadata("design:type", String)
], Hotel.prototype, "hotelName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_City' }),
    __metadata("design:type", Number)
], Hotel.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, name: 'Stars' }),
    __metadata("design:type", Number)
], Hotel.prototype, "stars", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'Image_Path' }),
    __metadata("design:type", String)
], Hotel.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'Description' }),
    __metadata("design:type", String)
], Hotel.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'Amenities' }),
    __metadata("design:type", String)
], Hotel.prototype, "amenities", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, nullable: true, name: 'Rating' }),
    __metadata("design:type", Number)
], Hotel.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_City' }),
    __metadata("design:type", city_entity_1.City)
], Hotel.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_has_hotel_entity_1.TravelHasHotel, (travelHasHotel) => travelHasHotel.hotel),
    __metadata("design:type", Array)
], Hotel.prototype, "travels", void 0);
exports.Hotel = Hotel = __decorate([
    (0, typeorm_1.Entity)('Hotel')
], Hotel);
//# sourceMappingURL=hotel.entity.js.map
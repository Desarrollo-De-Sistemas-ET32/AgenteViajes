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
exports.City = void 0;
const typeorm_1 = require("typeorm");
let City = class City {
};
exports.City = City;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_City' }),
    __metadata("design:type", Number)
], City.prototype, "idCity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'City_Name', type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], City.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Country', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], City.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Description', type: 'text', nullable: true }),
    __metadata("design:type", String)
], City.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Image_Path', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], City.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Average_Rating', type: 'decimal', precision: 3, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], City.prototype, "averageRating", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)('City')
], City);
//# sourceMappingURL=city.entity.js.map
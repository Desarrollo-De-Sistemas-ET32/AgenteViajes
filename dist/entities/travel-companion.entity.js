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
exports.TravelCompanion = void 0;
const typeorm_1 = require("typeorm");
const travel_entity_1 = require("./travel.entity");
let TravelCompanion = class TravelCompanion {
};
exports.TravelCompanion = TravelCompanion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Companion' }),
    __metadata("design:type", Number)
], TravelCompanion.prototype, "idCompanion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_Travel', type: 'int' }),
    __metadata("design:type", Number)
], TravelCompanion.prototype, "idTravel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Name', type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], TravelCompanion.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Surname', type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], TravelCompanion.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Email', type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], TravelCompanion.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Phone_number', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], TravelCompanion.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Relationship', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], TravelCompanion.prototype, "relationship", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => travel_entity_1.Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_Travel' }),
    __metadata("design:type", travel_entity_1.Travel)
], TravelCompanion.prototype, "travel", void 0);
exports.TravelCompanion = TravelCompanion = __decorate([
    (0, typeorm_1.Entity)('Travel_Companion')
], TravelCompanion);
//# sourceMappingURL=travel-companion.entity.js.map
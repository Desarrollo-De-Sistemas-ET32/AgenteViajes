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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hotel_entity_1 = require("./hotel.entity");
let HotelService = class HotelService {
    hotelRepository;
    constructor(hotelRepository) {
        this.hotelRepository = hotelRepository;
    }
    create(createHotelDto) {
        const hotel = this.hotelRepository.create(createHotelDto);
        return this.hotelRepository.save(hotel);
    }
    findAll() {
        return this.hotelRepository.find();
    }
    findOne(id) {
        return this.hotelRepository.findOneBy({ ID_Hotel: id });
    }
    update(id, updateHotelDto) {
        return this.hotelRepository.update(id, updateHotelDto);
    }
    remove(id) {
        return this.hotelRepository.delete(id);
    }
};
exports.HotelService = HotelService;
exports.HotelService = HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HotelService);
//# sourceMappingURL=hotel.service.js.map
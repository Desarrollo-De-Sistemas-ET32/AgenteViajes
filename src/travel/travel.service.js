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
exports.TravelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const travel_entity_1 = require("./travel.entity");
let TravelService = class TravelService {
    travelRepository;
    constructor(travelRepository) {
        this.travelRepository = travelRepository;
    }
    create(createTravelDto) {
        const travel = this.travelRepository.create(createTravelDto);
        return this.travelRepository.save(travel);
    }
    findAll() {
        return this.travelRepository.find();
    }
    findOne(id) {
        return this.travelRepository.findOneBy({ ID_Travel: id });
    }
    update(id, updateTravelDto) {
        return this.travelRepository.update(id, updateTravelDto);
    }
    remove(id) {
        return this.travelRepository.delete(id);
    }
};
exports.TravelService = TravelService;
exports.TravelService = TravelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(travel_entity_1.Travel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TravelService);
//# sourceMappingURL=travel.service.js.map
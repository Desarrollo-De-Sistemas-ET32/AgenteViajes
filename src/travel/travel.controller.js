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
exports.TravelController = void 0;
const common_1 = require("@nestjs/common");
const travel_service_1 = require("./travel.service");
const create_travel_dto_1 = require("./dto/create-travel.dto");
const update_travel_dto_1 = require("./dto/update-travel.dto");
let TravelController = class TravelController {
    travelService;
    constructor(travelService) {
        this.travelService = travelService;
    }
    create(createTravelDto) {
        return this.travelService.create(createTravelDto);
    }
    findAll() {
        return this.travelService.findAll();
    }
    findOne(id) {
        return this.travelService.findOne(+id);
    }
    update(id, updateTravelDto) {
        return this.travelService.update(+id, updateTravelDto);
    }
    remove(id) {
        return this.travelService.remove(+id);
    }
};
exports.TravelController = TravelController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_dto_1.CreateTravelDto]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_travel_dto_1.UpdateTravelDto]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelController.prototype, "remove", null);
exports.TravelController = TravelController = __decorate([
    (0, common_1.Controller)('travel'),
    __metadata("design:paramtypes", [travel_service_1.TravelService])
], TravelController);
//# sourceMappingURL=travel.controller.js.map
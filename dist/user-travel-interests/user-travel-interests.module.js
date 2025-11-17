"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTravelInterestsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_travel_interests_service_1 = require("./user-travel-interests.service");
const user_travel_interests_controller_1 = require("./user-travel-interests.controller");
const user_travel_interests_entity_1 = require("../entities/user-travel-interests.entity");
let UserTravelInterestsModule = class UserTravelInterestsModule {
};
exports.UserTravelInterestsModule = UserTravelInterestsModule;
exports.UserTravelInterestsModule = UserTravelInterestsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_travel_interests_entity_1.UserTravelInterest])],
        controllers: [user_travel_interests_controller_1.UserTravelInterestsController],
        providers: [user_travel_interests_service_1.UserTravelInterestsService],
        exports: [user_travel_interests_service_1.UserTravelInterestsService],
    })
], UserTravelInterestsModule);
//# sourceMappingURL=user-travel-interests.module.js.map
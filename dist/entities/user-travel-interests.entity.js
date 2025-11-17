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
exports.UserTravelInterest = exports.InterestCategory = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var InterestCategory;
(function (InterestCategory) {
    InterestCategory["GASTRONOMIA"] = "Gastronom\u00EDa";
    InterestCategory["NATURALEZA"] = "Naturaleza";
    InterestCategory["HISTORIA"] = "Historia";
    InterestCategory["AVENTURA"] = "Aventura";
    InterestCategory["MUSICA"] = "M\u00FAsica";
    InterestCategory["CULTURA"] = "Cultura";
    InterestCategory["FOTOGRAFIA"] = "Fotograf\u00EDa";
})(InterestCategory || (exports.InterestCategory = InterestCategory = {}));
let UserTravelInterest = class UserTravelInterest {
};
exports.UserTravelInterest = UserTravelInterest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Interest' }),
    __metadata("design:type", Number)
], UserTravelInterest.prototype, "idInterest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], UserTravelInterest.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Interest_Category',
        type: 'enum',
        enum: InterestCategory
    }),
    __metadata("design:type", String)
], UserTravelInterest.prototype, "interestCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Priority', type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], UserTravelInterest.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], UserTravelInterest.prototype, "user", void 0);
exports.UserTravelInterest = UserTravelInterest = __decorate([
    (0, typeorm_1.Entity)('User_Travel_Interests')
], UserTravelInterest);
//# sourceMappingURL=user-travel-interests.entity.js.map
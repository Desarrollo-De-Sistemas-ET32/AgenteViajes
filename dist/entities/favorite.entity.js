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
exports.Favorite = exports.EntityType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var EntityType;
(function (EntityType) {
    EntityType["HOTEL"] = "Hotel";
    EntityType["ACTIVITY"] = "Activity";
    EntityType["DESTINATION"] = "Destination";
    EntityType["TRAVEL"] = "Travel";
})(EntityType || (exports.EntityType = EntityType = {}));
let Favorite = class Favorite {
};
exports.Favorite = Favorite;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Favorite' }),
    __metadata("design:type", Number)
], Favorite.prototype, "idFavorite", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], Favorite.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Entity_Type',
        type: 'enum',
        enum: EntityType
    }),
    __metadata("design:type", String)
], Favorite.prototype, "entityType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Entity_ID', type: 'int' }),
    __metadata("design:type", Number)
], Favorite.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'Added_At' }),
    __metadata("design:type", Date)
], Favorite.prototype, "addedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], Favorite.prototype, "user", void 0);
exports.Favorite = Favorite = __decorate([
    (0, typeorm_1.Entity)('Favorites'),
    (0, typeorm_1.Index)(['idUser', 'entityType', 'entityId'], { unique: true })
], Favorite);
//# sourceMappingURL=favorite.entity.js.map
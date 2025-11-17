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
exports.Review = exports.ReviewEntityType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
var ReviewEntityType;
(function (ReviewEntityType) {
    ReviewEntityType["HOTEL"] = "Hotel";
    ReviewEntityType["ACTIVITY"] = "Activity";
    ReviewEntityType["CITY"] = "City";
    ReviewEntityType["TRAVEL"] = "Travel";
})(ReviewEntityType || (exports.ReviewEntityType = ReviewEntityType = {}));
let Review = class Review {
};
exports.Review = Review;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Review' }),
    __metadata("design:type", Number)
], Review.prototype, "idReview", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_User', type: 'int' }),
    __metadata("design:type", Number)
], Review.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Entity_Type',
        type: 'enum',
        enum: ReviewEntityType
    }),
    __metadata("design:type", String)
], Review.prototype, "entityType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Entity_ID', type: 'int' }),
    __metadata("design:type", Number)
], Review.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Rating', type: 'decimal', precision: 3, scale: 2 }),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Review_Text', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Review.prototype, "reviewText", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'Created_At' }),
    __metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_User' }),
    __metadata("design:type", user_entity_1.User)
], Review.prototype, "user", void 0);
exports.Review = Review = __decorate([
    (0, typeorm_1.Entity)('Review')
], Review);
//# sourceMappingURL=review.entity.js.map
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
exports.Activity = exports.ActivityCategory = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("./city.entity");
const travel_has_activity_entity_1 = require("./travel-has-activity.entity");
var ActivityCategory;
(function (ActivityCategory) {
    ActivityCategory["MUSICA"] = "M\u00FAsica";
    ActivityCategory["HISTORIA"] = "Historia";
    ActivityCategory["AVENTURA"] = "Aventura";
    ActivityCategory["GASTRONOMIA"] = "Gastronom\u00EDa";
    ActivityCategory["CULTURA"] = "Cultura";
    ActivityCategory["NATURALEZA"] = "Naturaleza";
    ActivityCategory["DEPORTES"] = "Deportes";
})(ActivityCategory || (exports.ActivityCategory = ActivityCategory = {}));
let Activity = class Activity {
};
exports.Activity = Activity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Activity' }),
    __metadata("design:type", Number)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, name: 'Activity_Name' }),
    __metadata("design:type", String)
], Activity.prototype, "activityName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_City' }),
    __metadata("design:type", Number)
], Activity.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true, name: 'Cost' }),
    __metadata("design:type", Number)
], Activity.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true, name: 'Duration' }),
    __metadata("design:type", String)
], Activity.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ActivityCategory,
        nullable: true,
        name: 'Category',
    }),
    __metadata("design:type", String)
], Activity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, name: 'Media_Path' }),
    __metadata("design:type", String)
], Activity.prototype, "mediaPath", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'Description' }),
    __metadata("design:type", String)
], Activity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2, nullable: true, name: 'Rating' }),
    __metadata("design:type", Number)
], Activity.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'ID_City' }),
    __metadata("design:type", city_entity_1.City)
], Activity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => travel_has_activity_entity_1.TravelHasActivity, (travelHasActivity) => travelHasActivity.activity),
    __metadata("design:type", Array)
], Activity.prototype, "travels", void 0);
exports.Activity = Activity = __decorate([
    (0, typeorm_1.Entity)('Activity')
], Activity);
//# sourceMappingURL=activity.entity.js.map
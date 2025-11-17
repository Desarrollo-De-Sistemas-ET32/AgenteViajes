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
exports.TravelHasActivity = void 0;
const typeorm_1 = require("typeorm");
const travel_entity_1 = require("./travel.entity");
const activity_entity_1 = require("./activity.entity");
let TravelHasActivity = class TravelHasActivity {
};
exports.TravelHasActivity = TravelHasActivity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Travel_ID_Travel' }),
    __metadata("design:type", Number)
], TravelHasActivity.prototype, "travelId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'Activity_ID_Activity' }),
    __metadata("design:type", Number)
], TravelHasActivity.prototype, "activityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, name: 'Scheduled_Date' }),
    __metadata("design:type", Date)
], TravelHasActivity.prototype, "scheduledDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1, name: 'Number_of_Participants' }),
    __metadata("design:type", Number)
], TravelHasActivity.prototype, "numberOfParticipants", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, name: 'Special_Requirements' }),
    __metadata("design:type", String)
], TravelHasActivity.prototype, "specialRequirements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => travel_entity_1.Travel, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Travel_ID_Travel' }),
    __metadata("design:type", travel_entity_1.Travel)
], TravelHasActivity.prototype, "travel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => activity_entity_1.Activity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'Activity_ID_Activity' }),
    __metadata("design:type", activity_entity_1.Activity)
], TravelHasActivity.prototype, "activity", void 0);
exports.TravelHasActivity = TravelHasActivity = __decorate([
    (0, typeorm_1.Entity)('Travel_has_Activity')
], TravelHasActivity);
//# sourceMappingURL=travel-has-activity.entity.js.map
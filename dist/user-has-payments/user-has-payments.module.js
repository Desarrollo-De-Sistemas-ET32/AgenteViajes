"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHasPaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_has_payments_service_1 = require("./user-has-payments.service");
const user_has_payments_controller_1 = require("./user-has-payments.controller");
const user_has_payment_entity_1 = require("../entities/user-has-payment.entity");
let UserHasPaymentsModule = class UserHasPaymentsModule {
};
exports.UserHasPaymentsModule = UserHasPaymentsModule;
exports.UserHasPaymentsModule = UserHasPaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_has_payment_entity_1.UserHasPayment])],
        controllers: [user_has_payments_controller_1.UserHasPaymentsController],
        providers: [user_has_payments_service_1.UserHasPaymentsService],
        exports: [user_has_payments_service_1.UserHasPaymentsService],
    })
], UserHasPaymentsModule);
//# sourceMappingURL=user-has-payments.module.js.map
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
exports.UserHasPaymentsController = void 0;
const common_1 = require("@nestjs/common");
const user_has_payments_service_1 = require("./user-has-payments.service");
const create_user_has_payments_dto_1 = require("./dto/create-user-has-payments.dto");
let UserHasPaymentsController = class UserHasPaymentsController {
    constructor(userHasPaymentsService) {
        this.userHasPaymentsService = userHasPaymentsService;
    }
    create(createUserHasPaymentDto) {
        return this.userHasPaymentsService.create(createUserHasPaymentDto);
    }
    findAll() {
        return this.userHasPaymentsService.findAll();
    }
    findByUser(userId) {
        return this.userHasPaymentsService.findByUser(userId);
    }
    async countByUser(userId) {
        const count = await this.userHasPaymentsService.countByUser(userId);
        return { count };
    }
    findByPayment(paymentId) {
        return this.userHasPaymentsService.findByPayment(paymentId);
    }
    async countByPayment(paymentId) {
        const count = await this.userHasPaymentsService.countByPayment(paymentId);
        return { count };
    }
    async hasPayment(userId, paymentId) {
        const hasPayment = await this.userHasPaymentsService.hasPayment(userId, paymentId);
        return { hasPayment };
    }
    findOne(userId, paymentId) {
        return this.userHasPaymentsService.findOne(userId, paymentId);
    }
    remove(userId, paymentId) {
        return this.userHasPaymentsService.remove(userId, paymentId);
    }
    removeAllByUser(userId) {
        return this.userHasPaymentsService.removeAllByUser(userId);
    }
    removeAllByPayment(paymentId) {
        return this.userHasPaymentsService.removeAllByPayment(paymentId);
    }
};
exports.UserHasPaymentsController = UserHasPaymentsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_has_payments_dto_1.CreateUserHasPaymentDto]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/count'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserHasPaymentsController.prototype, "countByUser", null);
__decorate([
    (0, common_1.Get)('payment/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "findByPayment", null);
__decorate([
    (0, common_1.Get)('payment/:paymentId/count'),
    __param(0, (0, common_1.Param)('paymentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserHasPaymentsController.prototype, "countByPayment", null);
__decorate([
    (0, common_1.Get)('check'),
    __param(0, (0, common_1.Query)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('paymentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserHasPaymentsController.prototype, "hasPayment", null);
__decorate([
    (0, common_1.Get)(':userId/:paymentId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('paymentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':userId/:paymentId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('paymentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('user/:userId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "removeAllByUser", null);
__decorate([
    (0, common_1.Delete)('payment/:paymentId/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('paymentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserHasPaymentsController.prototype, "removeAllByPayment", null);
exports.UserHasPaymentsController = UserHasPaymentsController = __decorate([
    (0, common_1.Controller)('user-has-payments'),
    __metadata("design:paramtypes", [user_has_payments_service_1.UserHasPaymentsService])
], UserHasPaymentsController);
//# sourceMappingURL=user-has-payments.controller.js.map
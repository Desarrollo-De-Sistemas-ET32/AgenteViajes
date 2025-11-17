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
exports.UserHasPaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_has_payment_entity_1 = require("../entities/user-has-payment.entity");
let UserHasPaymentsService = class UserHasPaymentsService {
    constructor(userHasPaymentRepository) {
        this.userHasPaymentRepository = userHasPaymentRepository;
    }
    async create(createUserHasPaymentDto) {
        const existing = await this.userHasPaymentRepository.findOne({
            where: {
                userIdUser: createUserHasPaymentDto.userIdUser,
                paymentsIdPayments: createUserHasPaymentDto.paymentsIdPayments,
            },
        });
        if (existing) {
            throw new common_1.ConflictException('This payment is already associated with this user');
        }
        const userHasPayment = this.userHasPaymentRepository.create(createUserHasPaymentDto);
        return await this.userHasPaymentRepository.save(userHasPayment);
    }
    async findAll() {
        return await this.userHasPaymentRepository.find({
            relations: ['user', 'payment'],
        });
    }
    async findOne(userId, paymentId) {
        const userHasPayment = await this.userHasPaymentRepository.findOne({
            where: { userIdUser: userId, paymentsIdPayments: paymentId },
            relations: ['user', 'payment'],
        });
        if (!userHasPayment) {
            throw new common_1.NotFoundException(`Relation between User ${userId} and Payment ${paymentId} not found`);
        }
        return userHasPayment;
    }
    async findByUser(userId) {
        return await this.userHasPaymentRepository.find({
            where: { userIdUser: userId },
            relations: ['payment'],
        });
    }
    async findByPayment(paymentId) {
        return await this.userHasPaymentRepository.find({
            where: { paymentsIdPayments: paymentId },
            relations: ['user'],
        });
    }
    async remove(userId, paymentId) {
        const userHasPayment = await this.findOne(userId, paymentId);
        await this.userHasPaymentRepository.remove(userHasPayment);
    }
    async removeAllByUser(userId) {
        const relations = await this.findByUser(userId);
        if (relations.length > 0) {
            await this.userHasPaymentRepository.remove(relations);
        }
    }
    async removeAllByPayment(paymentId) {
        const relations = await this.findByPayment(paymentId);
        if (relations.length > 0) {
            await this.userHasPaymentRepository.remove(relations);
        }
    }
    async countByUser(userId) {
        return await this.userHasPaymentRepository.count({
            where: { userIdUser: userId },
        });
    }
    async countByPayment(paymentId) {
        return await this.userHasPaymentRepository.count({
            where: { paymentsIdPayments: paymentId },
        });
    }
    async hasPayment(userId, paymentId) {
        const count = await this.userHasPaymentRepository.count({
            where: { userIdUser: userId, paymentsIdPayments: paymentId },
        });
        return count > 0;
    }
};
exports.UserHasPaymentsService = UserHasPaymentsService;
exports.UserHasPaymentsService = UserHasPaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_has_payment_entity_1.UserHasPayment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserHasPaymentsService);
//# sourceMappingURL=user-has-payments.service.js.map
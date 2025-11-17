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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payments_entity_1 = require("../entities/payments.entity");
let PaymentService = class PaymentService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async create(createPaymentDto) {
        const payment = this.paymentRepository.create(createPaymentDto);
        return await this.paymentRepository.save(payment);
    }
    async findAll() {
        return await this.paymentRepository.find({
            order: { paymentDate: 'DESC' },
        });
    }
    async findOne(id) {
        const payment = await this.paymentRepository.findOne({
            where: { idPayments: id },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        return payment;
    }
    async findByStatus(status) {
        return await this.paymentRepository.find({
            where: { status },
            order: { paymentDate: 'DESC' },
        });
    }
    async findByTransactionCode(transactionCode) {
        const payment = await this.paymentRepository.findOne({
            where: { transactionCode },
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with transaction code ${transactionCode} not found`);
        }
        return payment;
    }
    async findByEntityType(entityType) {
        return await this.paymentRepository.find({
            where: { entityType },
            order: { paymentDate: 'DESC' },
        });
    }
    async findByEntity(entityType, entityId) {
        return await this.paymentRepository.find({
            where: { entityType, entityId },
            order: { paymentDate: 'DESC' },
        });
    }
    async update(id, updatePaymentDto) {
        const payment = await this.findOne(id);
        Object.assign(payment, updatePaymentDto);
        return await this.paymentRepository.save(payment);
    }
    async updateStatus(id, status) {
        const payment = await this.findOne(id);
        payment.status = status;
        return await this.paymentRepository.save(payment);
    }
    async remove(id) {
        const payment = await this.findOne(id);
        await this.paymentRepository.remove(payment);
    }
    async countByStatus(status) {
        return await this.paymentRepository.count({
            where: { status },
        });
    }
    async getTotalAmountByStatus(status) {
        const result = await this.paymentRepository
            .createQueryBuilder('payment')
            .select('SUM(payment.amount)', 'total')
            .where('payment.status = :status', { status })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.total) || 0;
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payments_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map
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
exports.Payment = exports.PaymentEntityType = exports.PaymentMethod = exports.PaymentStatus = void 0;
const typeorm_1 = require("typeorm");
const user_has_payment_entity_1 = require("./user-has-payment.entity");
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "Pending";
    PaymentStatus["COMPLETED"] = "Completed";
    PaymentStatus["FAILED"] = "Failed";
    PaymentStatus["REFUNDED"] = "Refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CREDIT_CARD"] = "Credit Card";
    PaymentMethod["DEBIT_CARD"] = "Debit Card";
    PaymentMethod["PAYPAL"] = "PayPal";
    PaymentMethod["BANK_TRANSFER"] = "Bank Transfer";
    PaymentMethod["CASH"] = "Cash";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var PaymentEntityType;
(function (PaymentEntityType) {
    PaymentEntityType["TRAVEL"] = "Travel";
    PaymentEntityType["FLIGHT"] = "Flight";
    PaymentEntityType["HOTEL"] = "Hotel";
    PaymentEntityType["ACTIVITY"] = "Activity";
})(PaymentEntityType || (exports.PaymentEntityType = PaymentEntityType = {}));
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Payments' }),
    __metadata("design:type", Number)
], Payment.prototype, "idPayments", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Status',
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.PENDING
    }),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Payment_Date', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Payment_method',
        type: 'enum',
        enum: PaymentMethod,
        nullable: true
    }),
    __metadata("design:type", String)
], Payment.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Transaction_Code', type: 'varchar', length: 100, nullable: true, unique: true }),
    __metadata("design:type", String)
], Payment.prototype, "transactionCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Amount', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Currency', type: 'varchar', length: 3, default: 'USD' }),
    __metadata("design:type", String)
], Payment.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Entity_Type',
        type: 'enum',
        enum: PaymentEntityType
    }),
    __metadata("design:type", String)
], Payment.prototype, "entityType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Entity_ID', type: 'int' }),
    __metadata("design:type", Number)
], Payment.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_has_payment_entity_1.UserHasPayment, (userHasPayment) => userHasPayment.payment),
    __metadata("design:type", Array)
], Payment.prototype, "userHasPayments", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)('Payments')
], Payment);
//# sourceMappingURL=payments.entity.js.map
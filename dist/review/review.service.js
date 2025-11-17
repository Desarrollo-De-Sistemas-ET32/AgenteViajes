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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("../entities/review.entity");
let ReviewService = class ReviewService {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async create(createReviewDto) {
        const review = this.reviewRepository.create(createReviewDto);
        return await this.reviewRepository.save(review);
    }
    async findAll() {
        return await this.reviewRepository.find({
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const review = await this.reviewRepository.findOne({
            where: { idReview: id },
            relations: ['user'],
        });
        if (!review) {
            throw new common_1.NotFoundException(`Review with ID ${id} not found`);
        }
        return review;
    }
    async findByUser(userId) {
        return await this.reviewRepository.find({
            where: { idUser: userId },
            order: { createdAt: 'DESC' },
        });
    }
    async findByEntity(entityType, entityId) {
        return await this.reviewRepository.find({
            where: { entityType, entityId },
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByEntityType(entityType) {
        return await this.reviewRepository.find({
            where: { entityType },
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByMinRating(rating) {
        return await this.reviewRepository.find({
            where: {
                rating: (0, typeorm_2.MoreThanOrEqual)(rating),
            },
            relations: ['user'],
            order: { rating: 'DESC' },
        });
    }
    async findTopRatedByEntity(entityType, entityId, limit = 10) {
        return await this.reviewRepository.find({
            where: { entityType, entityId },
            relations: ['user'],
            order: { rating: 'DESC' },
            take: limit,
        });
    }
    async update(id, updateReviewDto) {
        const review = await this.findOne(id);
        Object.assign(review, updateReviewDto);
        return await this.reviewRepository.save(review);
    }
    async remove(id) {
        const review = await this.findOne(id);
        await this.reviewRepository.remove(review);
    }
    async removeAllByUser(userId) {
        const reviews = await this.findByUser(userId);
        if (reviews.length > 0) {
            await this.reviewRepository.remove(reviews);
        }
    }
    async removeAllByEntity(entityType, entityId) {
        const reviews = await this.findByEntity(entityType, entityId);
        if (reviews.length > 0) {
            await this.reviewRepository.remove(reviews);
        }
    }
    async countByUser(userId) {
        return await this.reviewRepository.count({
            where: { idUser: userId },
        });
    }
    async countByEntity(entityType, entityId) {
        return await this.reviewRepository.count({
            where: { entityType, entityId },
        });
    }
    async getAverageRatingByEntity(entityType, entityId) {
        const result = await this.reviewRepository
            .createQueryBuilder('review')
            .select('AVG(review.rating)', 'average')
            .where('review.entityType = :entityType', { entityType })
            .andWhere('review.entityId = :entityId', { entityId })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.average) || 0;
    }
    async getAverageRatingByUser(userId) {
        const result = await this.reviewRepository
            .createQueryBuilder('review')
            .select('AVG(review.rating)', 'average')
            .where('review.idUser = :userId', { userId })
            .getRawOne();
        return (result === null || result === void 0 ? void 0 : result.average) || 0;
    }
    async hasUserReviewedEntity(userId, entityType, entityId) {
        const count = await this.reviewRepository.count({
            where: { idUser: userId, entityType, entityId },
        });
        return count > 0;
    }
    async getRecentReviews(limit = 10) {
        return await this.reviewRepository.find({
            relations: ['user'],
            order: { createdAt: 'DESC' },
            take: limit,
        });
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewService);
//# sourceMappingURL=review.service.js.map
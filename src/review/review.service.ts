import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { Review, ReviewEntityType } from '../entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const review = this.reviewRepository.create(createReviewDto);
    return await this.reviewRepository.save(review);
  }

  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Review> {
    const review = await this.reviewRepository.findOne({
      where: { idReview: id },
      relations: ['user'],
    });

    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }

    return review;
  }

  async findByUser(userId: number): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { idUser: userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findByEntity(entityType: ReviewEntityType, entityId: number): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { entityType, entityId },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByEntityType(entityType: ReviewEntityType): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { entityType },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByMinRating(rating: number): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: {
        rating: MoreThanOrEqual(rating),
      },
      relations: ['user'],
      order: { rating: 'DESC' },
    });
  }

  async findTopRatedByEntity(entityType: ReviewEntityType, entityId: number, limit: number = 10): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { entityType, entityId },
      relations: ['user'],
      order: { rating: 'DESC' },
      take: limit,
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
    const review = await this.findOne(id);
    
    Object.assign(review, updateReviewDto);
    return await this.reviewRepository.save(review);
  }

  async remove(id: number): Promise<void> {
    const review = await this.findOne(id);
    await this.reviewRepository.remove(review);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const reviews = await this.findByUser(userId);
    if (reviews.length > 0) {
      await this.reviewRepository.remove(reviews);
    }
  }

  async removeAllByEntity(entityType: ReviewEntityType, entityId: number): Promise<void> {
    const reviews = await this.findByEntity(entityType, entityId);
    if (reviews.length > 0) {
      await this.reviewRepository.remove(reviews);
    }
  }

  async countByUser(userId: number): Promise<number> {
    return await this.reviewRepository.count({
      where: { idUser: userId },
    });
  }

  async countByEntity(entityType: ReviewEntityType, entityId: number): Promise<number> {
    return await this.reviewRepository.count({
      where: { entityType, entityId },
    });
  }

  async getAverageRatingByEntity(entityType: ReviewEntityType, entityId: number): Promise<number> {
    const result = await this.reviewRepository
      .createQueryBuilder('review')
      .select('AVG(review.rating)', 'average')
      .where('review.entityType = :entityType', { entityType })
      .andWhere('review.entityId = :entityId', { entityId })
      .getRawOne();

    return result?.average || 0;
  }

  async getAverageRatingByUser(userId: number): Promise<number> {
    const result = await this.reviewRepository
      .createQueryBuilder('review')
      .select('AVG(review.rating)', 'average')
      .where('review.idUser = :userId', { userId })
      .getRawOne();

    return result?.average || 0;
  }

  async hasUserReviewedEntity(userId: number, entityType: ReviewEntityType, entityId: number): Promise<boolean> {
    const count = await this.reviewRepository.count({
      where: { idUser: userId, entityType, entityId },
    });
    return count > 0;
  }

  async getRecentReviews(limit: number = 10): Promise<Review[]> {
    return await this.reviewRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }
}
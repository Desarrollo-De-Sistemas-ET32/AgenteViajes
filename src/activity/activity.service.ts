import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { Activity, ActivityCategory } from '../entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const activity = this.activityRepository.create(createActivityDto);
    return await this.activityRepository.save(activity);
  }

  async findAll(): Promise<Activity[]> {
    return await this.activityRepository.find({
      relations: ['city'],
      order: { activityName: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Activity> {
    const activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['city'],
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID ${id} not found`);
    }

    return activity;
  }

  async findWithTravels(id: number): Promise<Activity> {
    const activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['city', 'travels'],
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID ${id} not found`);
    }

    return activity;
  }

  async findByCity(cityId: number): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { cityId },
      relations: ['city'],
      order: { rating: 'DESC' },
    });
  }

  async findByCategory(category: ActivityCategory): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { category },
      relations: ['city'],
      order: { rating: 'DESC' },
    });
  }

  async findByCategoryAndCity(category: ActivityCategory, cityId: number): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { category, cityId },
      relations: ['city'],
      order: { rating: 'DESC' },
    });
  }

  async findByMinRating(minRating: number): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { rating: MoreThanOrEqual(minRating) },
      relations: ['city'],
      order: { rating: 'DESC' },
    });
  }

  async findByCostRange(minCost: number, maxCost: number): Promise<Activity[]> {
    return await this.activityRepository
      .createQueryBuilder('activity')
      .leftJoinAndSelect('activity.city', 'city')
      .where('activity.cost >= :minCost', { minCost })
      .andWhere('activity.cost <= :maxCost', { maxCost })
      .orderBy('activity.cost', 'ASC')
      .getMany();
  }

  async searchByName(searchTerm: string): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { activityName: Like(`%${searchTerm}%`) },
      relations: ['city'],
      order: { activityName: 'ASC' },
    });
  }

  async findTopRated(limit: number = 10): Promise<Activity[]> {
    return await this.activityRepository.find({
      relations: ['city'],
      order: { rating: 'DESC' },
      take: limit,
    });
  }

  async countByCategory(category: ActivityCategory): Promise<number> {
    return await this.activityRepository.count({
      where: { category },
    });
  }

  async countByCity(cityId: number): Promise<number> {
    return await this.activityRepository.count({
      where: { cityId },
    });
  }

  async getAverageRating(): Promise<number> {
    const result = await this.activityRepository
      .createQueryBuilder('activity')
      .select('AVG(activity.rating)', 'avgRating')
      .where('activity.rating IS NOT NULL')
      .getRawOne();

    return result?.avgRating || 0;
  }

  async getAverageRatingByCity(cityId: number): Promise<number> {
    const result = await this.activityRepository
      .createQueryBuilder('activity')
      .select('AVG(activity.rating)', 'avgRating')
      .where('activity.cityId = :cityId', { cityId })
      .andWhere('activity.rating IS NOT NULL')
      .getRawOne();

    return result?.avgRating || 0;
  }

  async getAverageCost(): Promise<number> {
    const result = await this.activityRepository
      .createQueryBuilder('activity')
      .select('AVG(activity.cost)', 'avgCost')
      .where('activity.cost IS NOT NULL')
      .getRawOne();

    return result?.avgCost || 0;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto): Promise<Activity> {
    const activity = await this.findOne(id);

    Object.assign(activity, updateActivityDto);
    return await this.activityRepository.save(activity);
  }

  async updateRating(id: number, rating: number): Promise<Activity> {
    const activity = await this.findOne(id);
    activity.rating = rating;
    return await this.activityRepository.save(activity);
  }

  async remove(id: number): Promise<void> {
    const activity = await this.findOne(id);
    await this.activityRepository.remove(activity);
  }
}
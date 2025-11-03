import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { Activity, ActivityCategory } from '../entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const activity = this.activityRepository.create(createActivityDto);
    return await this.activityRepository.save(activity);
  }

  async findAll(): Promise<Activity[]> {
    return await this.activityRepository.find({
      order: { activityName: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Activity> {
    const activity = await this.activityRepository.findOne({
      where: { idActivity: id },
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID ${id} not found`);
    }

    return activity;
  }

  async findByCategory(category: ActivityCategory): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { category },
      order: { activityName: 'ASC' },
    });
  }

  async findByLocation(location: string): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: { location },
      order: { activityName: 'ASC' },
    });
  }

  async findByCostRange(minCost: number, maxCost: number): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: {
        cost: Between(minCost, maxCost),
      },
      order: { cost: 'ASC' },
    });
  }

  async findByMaxCost(maxCost: number): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: {
        cost: LessThanOrEqual(maxCost),
      },
      order: { cost: 'ASC' },
    });
  }

  async findByMinRating(minRating: number): Promise<Activity[]> {
    return await this.activityRepository.find({
      where: {
        rating: MoreThanOrEqual(minRating),
      },
      order: { rating: 'DESC' },
    });
  }

  async findTopRated(limit: number = 10): Promise<Activity[]> {
    return await this.activityRepository.find({
      order: { rating: 'DESC' },
      take: limit,
    });
  }

  async searchByName(name: string): Promise<Activity[]> {
    return await this.activityRepository
      .createQueryBuilder('activity')
      .where('activity.activityName LIKE :name', { name: `%${name}%` })
      .orderBy('activity.activityName', 'ASC')
      .getMany();
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

  async countByCategory(category: ActivityCategory): Promise<number> {
    return await this.activityRepository.count({
      where: { category },
    });
  }

  async countByLocation(location: string): Promise<number> {
    return await this.activityRepository.count({
      where: { location },
    });
  }

  async getAverageCost(): Promise<number> {
    const result = await this.activityRepository
      .createQueryBuilder('activity')
      .select('AVG(activity.cost)', 'average')
      .getRawOne();

    return result?.average || 0;
  }

  async getAverageRating(): Promise<number> {
    const result = await this.activityRepository
      .createQueryBuilder('activity')
      .select('AVG(activity.rating)', 'average')
      .getRawOne();

    return result?.average || 0;
  }
}
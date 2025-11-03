import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TravelHasActivity } from '../entities/travel-has-activity.entity';
import { CreateTravelHasActivityDto } from './dto/create-travel-has-activity.dto';
import { UpdateTravelHasActivityDto } from './dto/update-travel-has-activity.dto';

@Injectable()
export class TravelHasActivityService {
  constructor(
    @InjectRepository(TravelHasActivity)
    private travelHasActivityRepository: Repository<TravelHasActivity>,
  ) {}

  async create(createTravelHasActivityDto: CreateTravelHasActivityDto): Promise<TravelHasActivity> {
    const travelHasActivity = this.travelHasActivityRepository.create(createTravelHasActivityDto);
    return await this.travelHasActivityRepository.save(travelHasActivity);
  }

  async findAll(): Promise<TravelHasActivity[]> {
    return await this.travelHasActivityRepository.find({
      relations: ['travel', 'activity'],
      order: { scheduledDate: 'ASC' },
    });
  }

  async findOne(travelId: number, activityId: number): Promise<TravelHasActivity> {
    const travelHasActivity = await this.travelHasActivityRepository.findOne({
      where: { travelId, activityId },
      relations: ['travel', 'activity'],
    });

    if (!travelHasActivity) {
      throw new NotFoundException(
        `TravelHasActivity with Travel ID ${travelId} and Activity ID ${activityId} not found`,
      );
    }

    return travelHasActivity;
  }

  async findByTravel(travelId: number): Promise<TravelHasActivity[]> {
    return await this.travelHasActivityRepository.find({
      where: { travelId },
      relations: ['activity'],
      order: { scheduledDate: 'ASC' },
    });
  }

  async findByActivity(activityId: number): Promise<TravelHasActivity[]> {
    return await this.travelHasActivityRepository.find({
      where: { activityId },
      relations: ['travel'],
      order: { scheduledDate: 'ASC' },
    });
  }

  async findByTravelWithDate(travelId: number, startDate: Date, endDate: Date): Promise<TravelHasActivity[]> {
    return await this.travelHasActivityRepository
      .createQueryBuilder('travelHasActivity')
      .leftJoinAndSelect('travelHasActivity.activity', 'activity')
      .where('travelHasActivity.travelId = :travelId', { travelId })
      .andWhere('travelHasActivity.scheduledDate BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      })
      .orderBy('travelHasActivity.scheduledDate', 'ASC')
      .getMany();
  }

  async countActivitiesByTravel(travelId: number): Promise<number> {
    return await this.travelHasActivityRepository.count({
      where: { travelId },
    });
  }

  async countTravelsByActivity(activityId: number): Promise<number> {
    return await this.travelHasActivityRepository.count({
      where: { activityId },
    });
  }

  async getTotalParticipantsByTravel(travelId: number): Promise<number> {
    const result = await this.travelHasActivityRepository
      .createQueryBuilder('travelHasActivity')
      .select('SUM(travelHasActivity.numberOfParticipants)', 'totalParticipants')
      .where('travelHasActivity.travelId = :travelId', { travelId })
      .getRawOne();

    return result?.totalParticipants || 0;
  }

  async update(
    travelId: number,
    activityId: number,
    updateTravelHasActivityDto: UpdateTravelHasActivityDto,
  ): Promise<TravelHasActivity> {
    const travelHasActivity = await this.findOne(travelId, activityId);

    Object.assign(travelHasActivity, updateTravelHasActivityDto);
    return await this.travelHasActivityRepository.save(travelHasActivity);
  }

  async remove(travelId: number, activityId: number): Promise<void> {
    const travelHasActivity = await this.findOne(travelId, activityId);
    await this.travelHasActivityRepository.remove(travelHasActivity);
  }

  async removeAllByTravel(travelId: number): Promise<void> {
    await this.travelHasActivityRepository.delete({ travelId });
  }

  async removeAllByActivity(activityId: number): Promise<void> {
    await this.travelHasActivityRepository.delete({ activityId });
  }
}
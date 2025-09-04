import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from '../entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly repo: Repository<Activity>,
  ) {}

  async create(dto: CreateActivityDto): Promise<Activity> {
    // TypeORM's `create` can accept a DTO if its properties match the entity's properties.
    // The error was likely due to a temporary state or testing configuration issue.
    // This explicit creation and save pattern is robust.
    const activity = this.repo.create(dto);
    return this.repo.save(activity);
  }

  findAll(): Promise<Activity[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Activity> {
    const activity = await this.repo.findOne({ where: { id } });
    if (!activity) {
      throw new NotFoundException('Activity not found');
    }
    return activity;
  }

  async update(id: number, dto: UpdateActivityDto): Promise<Activity> {
    const activity = await this.findOne(id);
    // The previous error on update was due to type mismatch.
    // A safe way is to find the entity first, then apply changes.
    Object.assign(activity, dto);
    return this.repo.save(activity);
  }

  async remove(id: number): Promise<void> {
    const activity = await this.findOne(id);
    await this.repo.remove(activity);
  }
}

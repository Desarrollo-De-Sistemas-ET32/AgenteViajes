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
    private repo: Repository<Activity>,
  ) {}

  create(dto: CreateActivityDto) {
    const act = this.repo.create(dto);
    return this.repo.save(act);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateActivityDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const act = await this.repo.findOneBy({ id });
  
    if (!act) {
      throw new NotFoundException(`Activity with id ${id} not found`);
    }
  
    return this.repo.remove(act);
  }
}
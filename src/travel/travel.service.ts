import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from '../entities/travel.entity';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  constructor(
    @InjectRepository(Travel)
    private readonly repo: Repository<Travel>,
  ) {}

  create(dto: CreateTravelDto) {
    const travel = this.repo.create(dto);
    return this.repo.save(travel);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateTravelDto) {
    const travel = await this.findOne(id);
    if (!travel) throw new NotFoundException(`Travel with id ${id} not found`);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const travel = await this.findOne(id);
    if (!travel) throw new NotFoundException(`Travel with id ${id} not found`);
    return this.repo.remove(travel);
  }
}

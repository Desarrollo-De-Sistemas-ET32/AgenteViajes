import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flights } from '../entities/flights.entity';
import { CreateFlightsDto } from './dto/create-flights.dto';
import { UpdateFlightsDto } from './dto/update-flights.dto';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly repo: Repository<Flights>,
  ) {}

  create(dto: CreateFlightsDto) {
    const flight = this.repo.create(dto);
    return this.repo.save(flight);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateFlightsDto) {
    const flight = await this.findOne(id);
    if (!flight) throw new NotFoundException(`Flight with id ${id} not found`);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const flight = await this.findOne(id);
    if (!flight) throw new NotFoundException(`Flight with id ${id} not found`);
    return this.repo.remove(flight);
  }
}

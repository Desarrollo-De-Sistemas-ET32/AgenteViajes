import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TravelCompanion } from '../entities/travel-companion.entity';
import { CreateTravelCompanionDto } from './dto/create-travel-companion.dto';
import { UpdateTravelCompanionDto } from './dto/update-travel-companion.dto';

@Injectable()
export class TravelCompanionService {
  constructor(
    @InjectRepository(TravelCompanion)
    private readonly travelCompanionRepository: Repository<TravelCompanion>,
  ) {}

  async create(createTravelCompanionDto: CreateTravelCompanionDto): Promise<TravelCompanion> {
    const companion = this.travelCompanionRepository.create(createTravelCompanionDto);
    return await this.travelCompanionRepository.save(companion);
  }

  async findAll(): Promise<TravelCompanion[]> {
    return await this.travelCompanionRepository.find({
      relations: ['travel'],
      order: { idCompanion: 'DESC' },
    });
  }

  async findOne(id: number): Promise<TravelCompanion> {
    const companion = await this.travelCompanionRepository.findOne({
      where: { idCompanion: id },
      relations: ['travel'],
    });

    if (!companion) {
      throw new NotFoundException(`Travel Companion with ID ${id} not found`);
    }

    return companion;
  }

  async findByTravel(travelId: number): Promise<TravelCompanion[]> {
    return await this.travelCompanionRepository.find({
      where: { idTravel: travelId },
      order: { idCompanion: 'ASC' },
    });
  }

  async findByRelationship(relationship: string): Promise<TravelCompanion[]> {
    return await this.travelCompanionRepository.find({
      where: { relationship },
      relations: ['travel'],
      order: { idCompanion: 'DESC' },
    });
  }

  async findByEmail(email: string): Promise<TravelCompanion[]> {
    return await this.travelCompanionRepository.find({
      where: { email },
      relations: ['travel'],
      order: { idCompanion: 'DESC' },
    });
  }

  async searchByName(name: string): Promise<TravelCompanion[]> {
    return await this.travelCompanionRepository
      .createQueryBuilder('companion')
      .leftJoinAndSelect('companion.travel', 'travel')
      .where('companion.name LIKE :name OR companion.surname LIKE :name', { name: `%${name}%` })
      .orderBy('companion.idCompanion', 'DESC')
      .getMany();
  }

  async update(id: number, updateTravelCompanionDto: UpdateTravelCompanionDto): Promise<TravelCompanion> {
    const companion = await this.findOne(id);
    
    Object.assign(companion, updateTravelCompanionDto);
    return await this.travelCompanionRepository.save(companion);
  }

  async remove(id: number): Promise<void> {
    const companion = await this.findOne(id);
    await this.travelCompanionRepository.remove(companion);
  }

  async removeAllByTravel(travelId: number): Promise<void> {
    const companions = await this.findByTravel(travelId);
    if (companions.length > 0) {
      await this.travelCompanionRepository.remove(companions);
    }
  }

  async countByTravel(travelId: number): Promise<number> {
    return await this.travelCompanionRepository.count({
      where: { idTravel: travelId },
    });
  }

  async countByRelationship(relationship: string): Promise<number> {
    return await this.travelCompanionRepository.count({
      where: { relationship },
    });
  }

  async hasEmail(travelId: number, email: string): Promise<boolean> {
    const count = await this.travelCompanionRepository.count({
      where: { idTravel: travelId, email },
    });
    return count > 0;
  }

  async getFullName(id: number): Promise<string> {
    const companion = await this.findOne(id);
    return `${companion.name} ${companion.surname}`;
  }
}
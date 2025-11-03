import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DietaryRestriction, RestrictionType } from '../entities/dietary-restrictions.entity';
import { CreateDietaryRestrictionDto } from './dto/create-dietary-restrictions.dto';
import { UpdateDietaryRestrictionDto } from './dto/update-dietary-restrictions.dto';

@Injectable()
export class DietaryRestrictionsService {
  constructor(
    @InjectRepository(DietaryRestriction)
    private readonly dietaryRestrictionRepository: Repository<DietaryRestriction>,
  ) {}

  async create(createDietaryRestrictionDto: CreateDietaryRestrictionDto): Promise<DietaryRestriction> {
    const restriction = this.dietaryRestrictionRepository.create(createDietaryRestrictionDto);
    return await this.dietaryRestrictionRepository.save(restriction);
  }

  async findAll(): Promise<DietaryRestriction[]> {
    return await this.dietaryRestrictionRepository.find({
      relations: ['user'],
      order: { idRestriction: 'DESC' },
    });
  }

  async findOne(id: number): Promise<DietaryRestriction> {
    const restriction = await this.dietaryRestrictionRepository.findOne({
      where: { idRestriction: id },
      relations: ['user'],
    });

    if (!restriction) {
      throw new NotFoundException(`Dietary Restriction with ID ${id} not found`);
    }

    return restriction;
  }

  async findByUser(userId: number): Promise<DietaryRestriction[]> {
    return await this.dietaryRestrictionRepository.find({
      where: { idUser: userId },
      order: { idRestriction: 'DESC' },
    });
  }

  async findByType(restrictionType: RestrictionType): Promise<DietaryRestriction[]> {
    return await this.dietaryRestrictionRepository.find({
      where: { restrictionType },
      relations: ['user'],
      order: { idRestriction: 'DESC' },
    });
  }

  async findByUserAndType(userId: number, restrictionType: RestrictionType): Promise<DietaryRestriction[]> {
    return await this.dietaryRestrictionRepository.find({
      where: { idUser: userId, restrictionType },
      order: { idRestriction: 'DESC' },
    });
  }

  async update(id: number, updateDietaryRestrictionDto: UpdateDietaryRestrictionDto): Promise<DietaryRestriction> {
    const restriction = await this.findOne(id);
    
    Object.assign(restriction, updateDietaryRestrictionDto);
    return await this.dietaryRestrictionRepository.save(restriction);
  }

  async remove(id: number): Promise<void> {
    const restriction = await this.findOne(id);
    await this.dietaryRestrictionRepository.remove(restriction);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const restrictions = await this.findByUser(userId);
    if (restrictions.length > 0) {
      await this.dietaryRestrictionRepository.remove(restrictions);
    }
  }

  async countByUser(userId: number): Promise<number> {
    return await this.dietaryRestrictionRepository.count({
      where: { idUser: userId },
    });
  }

  async countByType(restrictionType: RestrictionType): Promise<number> {
    return await this.dietaryRestrictionRepository.count({
      where: { restrictionType },
    });
  }

  async hasRestriction(userId: number, restrictionType: RestrictionType): Promise<boolean> {
    const count = await this.dietaryRestrictionRepository.count({
      where: { idUser: userId, restrictionType },
    });
    return count > 0;
  }

  async getUserRestrictionTypes(userId: number): Promise<RestrictionType[]> {
    const restrictions = await this.findByUser(userId);
    return restrictions.map(r => r.restrictionType);
  }
}
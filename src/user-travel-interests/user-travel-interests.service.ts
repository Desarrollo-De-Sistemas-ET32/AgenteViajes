import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTravelInterest, InterestCategory } from '../entities/user-travel-interests.entity';
import { CreateUserTravelInterestDto } from './dto/create-user-travel-interests.dto';
import { UpdateUserTravelInterestDto } from './dto/update-user-travel-interests.dto';

@Injectable()
export class UserTravelInterestsService {
  constructor(
    @InjectRepository(UserTravelInterest)
    private readonly userTravelInterestRepository: Repository<UserTravelInterest>,
  ) {}

  async create(createUserTravelInterestDto: CreateUserTravelInterestDto): Promise<UserTravelInterest> {
    const interest = this.userTravelInterestRepository.create(createUserTravelInterestDto);
    return await this.userTravelInterestRepository.save(interest);
  }

  async findAll(): Promise<UserTravelInterest[]> {
    return await this.userTravelInterestRepository.find({
      relations: ['user'],
      order: { priority: 'DESC' },
    });
  }

  async findOne(id: number): Promise<UserTravelInterest> {
    const interest = await this.userTravelInterestRepository.findOne({
      where: { idInterest: id },
      relations: ['user'],
    });

    if (!interest) {
      throw new NotFoundException(`User Travel Interest with ID ${id} not found`);
    }

    return interest;
  }

  async findByUser(userId: number): Promise<UserTravelInterest[]> {
    return await this.userTravelInterestRepository.find({
      where: { idUser: userId },
      order: { priority: 'DESC' },
    });
  }

  async findByCategory(interestCategory: InterestCategory): Promise<UserTravelInterest[]> {
    return await this.userTravelInterestRepository.find({
      where: { interestCategory },
      relations: ['user'],
      order: { priority: 'DESC' },
    });
  }

  async findByUserAndCategory(userId: number, interestCategory: InterestCategory): Promise<UserTravelInterest[]> {
    return await this.userTravelInterestRepository.find({
      where: { idUser: userId, interestCategory },
      order: { priority: 'DESC' },
    });
  }

  async findByPriority(userId: number, priority: number): Promise<UserTravelInterest[]> {
    return await this.userTravelInterestRepository.find({
      where: { idUser: userId, priority },
      order: { idInterest: 'DESC' },
    });
  }

  async findTopPrioritiesByUser(userId: number, limit: number = 5): Promise<UserTravelInterest[]> {
    return await this.userTravelInterestRepository.find({
      where: { idUser: userId },
      order: { priority: 'DESC' },
      take: limit,
    });
  }

  async update(id: number, updateUserTravelInterestDto: UpdateUserTravelInterestDto): Promise<UserTravelInterest> {
    const interest = await this.findOne(id);
    
    Object.assign(interest, updateUserTravelInterestDto);
    return await this.userTravelInterestRepository.save(interest);
  }

  async updatePriority(id: number, priority: number): Promise<UserTravelInterest> {
    const interest = await this.findOne(id);
    interest.priority = priority;
    return await this.userTravelInterestRepository.save(interest);
  }

  async remove(id: number): Promise<void> {
    const interest = await this.findOne(id);
    await this.userTravelInterestRepository.remove(interest);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const interests = await this.findByUser(userId);
    if (interests.length > 0) {
      await this.userTravelInterestRepository.remove(interests);
    }
  }

  async countByUser(userId: number): Promise<number> {
    return await this.userTravelInterestRepository.count({
      where: { idUser: userId },
    });
  }

  async countByCategory(interestCategory: InterestCategory): Promise<number> {
    return await this.userTravelInterestRepository.count({
      where: { interestCategory },
    });
  }

  async hasInterest(userId: number, interestCategory: InterestCategory): Promise<boolean> {
    const count = await this.userTravelInterestRepository.count({
      where: { idUser: userId, interestCategory },
    });
    return count > 0;
  }

  async getUserInterestCategories(userId: number): Promise<InterestCategory[]> {
    const interests = await this.findByUser(userId);
    return interests.map(i => i.interestCategory);
  }

  async getAveragePriorityByUser(userId: number): Promise<number> {
    const result = await this.userTravelInterestRepository
      .createQueryBuilder('interest')
      .select('AVG(interest.priority)', 'average')
      .where('interest.idUser = :userId', { userId })
      .getRawOne();

    return result?.average || 0;
  }
}
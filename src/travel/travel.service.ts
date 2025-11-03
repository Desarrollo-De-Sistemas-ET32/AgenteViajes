import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { Travel, TravelStatus, TravelStyle, AccommodationType } from '../entities/travel.entity';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  constructor(
    @InjectRepository(Travel)
    private travelRepository: Repository<Travel>,
  ) {}

  async create(createTravelDto: CreateTravelDto): Promise<Travel> {
    const travel = this.travelRepository.create(createTravelDto);
    return await this.travelRepository.save(travel);
  }

  async findAll(): Promise<Travel[]> {
    return await this.travelRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Travel> {
    const travel = await this.travelRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!travel) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }

    return travel;
  }

  async findWithRelations(id: number): Promise<Travel> {
    const travel = await this.travelRepository.findOne({
      where: { id },
      relations: ['user', 'companions', 'hotels', 'flights', 'activities'],
    });

    if (!travel) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }

    return travel;
  }

  async findByUser(userId: number): Promise<Travel[]> {
    return await this.travelRepository.find({
      where: { userId },
      order: { startDate: 'DESC' },
    });
  }

  async findByStatus(status: TravelStatus): Promise<Travel[]> {
    return await this.travelRepository.find({
      where: { status },
      relations: ['user'],
      order: { startDate: 'ASC' },
    });
  }

  async findByDestination(destination: string): Promise<Travel[]> {
    return await this.travelRepository.find({
      where: { destination },
      relations: ['user'],
      order: { startDate: 'DESC' },
    });
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<Travel[]> {
    return await this.travelRepository.find({
      where: {
        startDate: Between(startDate, endDate),
      },
      relations: ['user'],
      order: { startDate: 'ASC' },
    });
  }

  async findUpcoming(): Promise<Travel[]> {
    const now = new Date();
    return await this.travelRepository.find({
      where: {
        startDate: MoreThanOrEqual(now),
        status: TravelStatus.CONFIRMED,
      },
      relations: ['user'],
      order: { startDate: 'ASC' },
    });
  }

  async findPast(): Promise<Travel[]> {
    const now = new Date();
    return await this.travelRepository.find({
      where: [
        { endDate: LessThanOrEqual(now) },
        { status: TravelStatus.COMPLETED },
      ],
      relations: ['user'],
      order: { endDate: 'DESC' },
    });
  }

  async findByTravelStyle(travelStyle: TravelStyle): Promise<Travel[]> {
    return await this.travelRepository.find({
      where: { travelStyle },
      relations: ['user'],
      order: { startDate: 'DESC' },
    });
  }

  async findByAccommodationType(accommodationType: AccommodationType): Promise<Travel[]> {
    return await this.travelRepository.find({
      where: { accommodationType },
      relations: ['user'],
      order: { startDate: 'DESC' },
    });
  }

  async countByUser(userId: number): Promise<number> {
    return await this.travelRepository.count({
      where: { userId },
    });
  }

  async countByStatus(status: TravelStatus): Promise<number> {
    return await this.travelRepository.count({
      where: { status },
    });
  }

  async getTotalCostByUser(userId: number): Promise<number> {
    const result = await this.travelRepository
      .createQueryBuilder('travel')
      .select('SUM(travel.totalCost)', 'totalCost')
      .where('travel.userId = :userId', { userId })
      .getRawOne();

    return result?.totalCost || 0;
  }

  async update(id: number, updateTravelDto: UpdateTravelDto): Promise<Travel> {
    const travel = await this.findOne(id);

    Object.assign(travel, updateTravelDto);
    return await this.travelRepository.save(travel);
  }

  async updateStatus(id: number, status: TravelStatus): Promise<Travel> {
    const travel = await this.findOne(id);
    travel.status = status;
    return await this.travelRepository.save(travel);
  }

  async remove(id: number): Promise<void> {
    const travel = await this.findOne(id);
    await this.travelRepository.remove(travel);
  }
}
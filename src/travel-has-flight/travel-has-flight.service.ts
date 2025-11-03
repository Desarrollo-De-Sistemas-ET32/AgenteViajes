import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TravelHasFlight, FlightType } from '../entities/travel-has-flight.entity';
import { CreateTravelHasFlightDto } from './dto/create-travel-has-flight.dto';
import { UpdateTravelHasFlightDto } from './dto/update-travel-has-flight.dto';

@Injectable()
export class TravelHasFlightService {
  constructor(
    @InjectRepository(TravelHasFlight)
    private readonly travelHasFlightRepository: Repository<TravelHasFlight>,
  ) {}

  async create(createTravelHasFlightDto: CreateTravelHasFlightDto): Promise<TravelHasFlight> {
    const existing = await this.travelHasFlightRepository.findOne({
      where: {
        travelIdTravel: createTravelHasFlightDto.travelIdTravel,
        flightIdFlight: createTravelHasFlightDto.flightIdFlight,
      },
    });

    if (existing) {
      throw new ConflictException('This flight is already associated with this travel');
    }

    const travelHasFlight = this.travelHasFlightRepository.create(createTravelHasFlightDto);
    return await this.travelHasFlightRepository.save(travelHasFlight);
  }

  async findAll(): Promise<TravelHasFlight[]> {
    return await this.travelHasFlightRepository.find({
      relations: ['travel', 'flight'],
    });
  }

  async findOne(travelId: number, flightId: number): Promise<TravelHasFlight> {
    const travelHasFlight = await this.travelHasFlightRepository.findOne({
      where: { travelIdTravel: travelId, flightIdFlight: flightId },
      relations: ['travel', 'flight'],
    });

    if (!travelHasFlight) {
      throw new NotFoundException(`Relation between Travel ${travelId} and Flight ${flightId} not found`);
    }

    return travelHasFlight;
  }

  async findByTravel(travelId: number): Promise<TravelHasFlight[]> {
    return await this.travelHasFlightRepository.find({
      where: { travelIdTravel: travelId },
      relations: ['flight'],
    });
  }

  async findByFlight(flightId: number): Promise<TravelHasFlight[]> {
    return await this.travelHasFlightRepository.find({
      where: { flightIdFlight: flightId },
      relations: ['travel'],
    });
  }

  async findByFlightType(travelId: number, flightType: FlightType): Promise<TravelHasFlight[]> {
    return await this.travelHasFlightRepository.find({
      where: { travelIdTravel: travelId, flightType },
      relations: ['flight'],
    });
  }

  async update(
    travelId: number,
    flightId: number,
    updateTravelHasFlightDto: UpdateTravelHasFlightDto,
  ): Promise<TravelHasFlight> {
    const travelHasFlight = await this.findOne(travelId, flightId);

    Object.assign(travelHasFlight, updateTravelHasFlightDto);
    return await this.travelHasFlightRepository.save(travelHasFlight);
  }

  async remove(travelId: number, flightId: number): Promise<void> {
    const travelHasFlight = await this.findOne(travelId, flightId);
    await this.travelHasFlightRepository.remove(travelHasFlight);
  }

  async removeAllByTravel(travelId: number): Promise<void> {
    const relations = await this.findByTravel(travelId);
    if (relations.length > 0) {
      await this.travelHasFlightRepository.remove(relations);
    }
  }

  async removeAllByFlight(flightId: number): Promise<void> {
    const relations = await this.findByFlight(flightId);
    if (relations.length > 0) {
      await this.travelHasFlightRepository.remove(relations);
    }
  }

  async countByTravel(travelId: number): Promise<number> {
    return await this.travelHasFlightRepository.count({
      where: { travelIdTravel: travelId },
    });
  }

  async countByFlight(flightId: number): Promise<number> {
    return await this.travelHasFlightRepository.count({
      where: { flightIdFlight: flightId },
    });
  }

  async countByFlightType(travelId: number, flightType: FlightType): Promise<number> {
    return await this.travelHasFlightRepository.count({
      where: { travelIdTravel: travelId, flightType },
    });
  }
}
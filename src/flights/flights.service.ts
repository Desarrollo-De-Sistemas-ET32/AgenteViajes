import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Flight, FlightClass, FlightStatus } from '../entities/flights.entity';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async create(createFlightDto: CreateFlightDto): Promise<Flight> {
    const flight = this.flightRepository.create(createFlightDto);
    return await this.flightRepository.save(flight);
  }

  async findAll(): Promise<Flight[]> {
    return await this.flightRepository.find({
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Flight> {
    const flight = await this.flightRepository.findOne({
      where: { idFlight: id },
      relations: ['user'],
    });

    if (!flight) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }

    return flight;
  }

  async findByUser(userId: number): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { idUser: userId },
      order: { departureDate: 'ASC' },
    });
  }

  async findByStatus(status: FlightStatus): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { status },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findByClass(flightClass: FlightClass): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { class: flightClass },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findByAirline(airline: string): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { airline },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findByOrigin(origin: string): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { origin },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findByDestination(destination: string): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { destination },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findByRoute(origin: string, destination: string): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: { origin, destination },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<Flight[]> {
    return await this.flightRepository.find({
      where: {
        departureDate: Between(startDate, endDate),
      },
      relations: ['user'],
      order: { departureDate: 'ASC' },
    });
  }

  async findUpcomingByUser(userId: number): Promise<Flight[]> {
    const now = new Date();
    return await this.flightRepository
      .createQueryBuilder('flight')
      .where('flight.idUser = :userId', { userId })
      .andWhere('flight.departureDate > :now', { now })
      .andWhere('flight.status IN (:...statuses)', {
        statuses: [FlightStatus.BOOKED, FlightStatus.CONFIRMED],
      })
      .orderBy('flight.departureDate', 'ASC')
      .getMany();
  }

  async update(id: number, updateFlightDto: UpdateFlightDto): Promise<Flight> {
    const flight = await this.findOne(id);

    Object.assign(flight, updateFlightDto);
    return await this.flightRepository.save(flight);
  }

  async updateStatus(id: number, status: FlightStatus): Promise<Flight> {
    const flight = await this.findOne(id);
    flight.status = status;
    return await this.flightRepository.save(flight);
  }

  async cancelFlight(id: number): Promise<Flight> {
    return await this.updateStatus(id, FlightStatus.CANCELLED);
  }

  async confirmFlight(id: number): Promise<Flight> {
    return await this.updateStatus(id, FlightStatus.CONFIRMED);
  }

  async completeFlight(id: number): Promise<Flight> {
    return await this.updateStatus(id, FlightStatus.COMPLETED);
  }

  async remove(id: number): Promise<void> {
    const flight = await this.findOne(id);
    await this.flightRepository.remove(flight);
  }

  async getTotalCostByUser(userId: number): Promise<number> {
    const result = await this.flightRepository
      .createQueryBuilder('flight')
      .select('SUM(flight.totalCost)', 'total')
      .where('flight.idUser = :userId', { userId })
      .andWhere('flight.status != :status', { status: FlightStatus.CANCELLED })
      .getRawOne();

    return result?.total || 0;
  }

  async countByUser(userId: number): Promise<number> {
    return await this.flightRepository.count({
      where: { idUser: userId },
    });
  }

  async countByStatus(status: FlightStatus): Promise<number> {
    return await this.flightRepository.count({
      where: { status },
    });
  }
}
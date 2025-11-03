import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TravelHasHotel } from '../entities/travel-has-hotel.entity';
import { CreateTravelHasHotelDto } from './dto/create-travel-has-hotel.dto';
import { UpdateTravelHasHotelDto } from './dto/update-travel-has-hotel.dto';

@Injectable()
export class TravelHasHotelService {
  constructor(
    @InjectRepository(TravelHasHotel)
    private readonly travelHasHotelRepository: Repository<TravelHasHotel>,
  ) {}

  async create(createTravelHasHotelDto: CreateTravelHasHotelDto): Promise<TravelHasHotel> {
    // Verificar si la relación ya existe
    const existing = await this.travelHasHotelRepository.findOne({
      where: {
        travelIdTravel: createTravelHasHotelDto.travelIdTravel,
        hotelIdHotel: createTravelHasHotelDto.hotelIdHotel,
      },
    });

    if (existing) {
      throw new ConflictException('This hotel is already associated with this travel');
    }

    const travelHasHotel = this.travelHasHotelRepository.create(createTravelHasHotelDto);
    return await this.travelHasHotelRepository.save(travelHasHotel);
  }

  async findAll(): Promise<TravelHasHotel[]> {
    return await this.travelHasHotelRepository.find({
      relations: ['travel', 'hotel'],
      order: { checkInDate: 'ASC' },
    });
  }

  async findOne(travelId: number, hotelId: number): Promise<TravelHasHotel> {
    const travelHasHotel = await this.travelHasHotelRepository.findOne({
      where: { travelIdTravel: travelId, hotelIdHotel: hotelId },
      relations: ['travel', 'hotel'],
    });

    if (!travelHasHotel) {
      throw new NotFoundException(`Relation between Travel ${travelId} and Hotel ${hotelId} not found`);
    }

    return travelHasHotel;
  }

  async findByTravel(travelId: number): Promise<TravelHasHotel[]> {
    return await this.travelHasHotelRepository.find({
      where: { travelIdTravel: travelId },
      relations: ['hotel'],
      order: { checkInDate: 'ASC' },
    });
  }

  async findByHotel(hotelId: number): Promise<TravelHasHotel[]> {
    return await this.travelHasHotelRepository.find({
      where: { hotelIdHotel: hotelId },
      relations: ['travel'],
      order: { checkInDate: 'ASC' },
    });
  }

  async update(
    travelId: number,
    hotelId: number,
    updateTravelHasHotelDto: UpdateTravelHasHotelDto,
  ): Promise<TravelHasHotel> {
    const travelHasHotel = await this.findOne(travelId, hotelId);

    Object.assign(travelHasHotel, updateTravelHasHotelDto);
    return await this.travelHasHotelRepository.save(travelHasHotel);
  }

  async remove(travelId: number, hotelId: number): Promise<void> {
    const travelHasHotel = await this.findOne(travelId, hotelId);
    await this.travelHasHotelRepository.remove(travelHasHotel);
  }

  async removeAllByTravel(travelId: number): Promise<void> {
    const relations = await this.findByTravel(travelId);
    if (relations.length > 0) {
      await this.travelHasHotelRepository.remove(relations);
    }
  }

  async removeAllByHotel(hotelId: number): Promise<void> {
    const relations = await this.findByHotel(hotelId);
    if (relations.length > 0) {
      await this.travelHasHotelRepository.remove(relations);
    }
  }

  async countByTravel(travelId: number): Promise<number> {
    return await this.travelHasHotelRepository.count({
      where: { travelIdTravel: travelId },
    });
  }

  async countByHotel(hotelId: number): Promise<number> {
    return await this.travelHasHotelRepository.count({
      where: { hotelIdHotel: hotelId },
    });
  }

  async getTotalRoomsByTravel(travelId: number): Promise<number> {
    const result = await this.travelHasHotelRepository
      .createQueryBuilder('thh')
      .select('SUM(thh.numberOfRooms)', 'total')
      .where('thh.travelIdTravel = :travelId', { travelId })
      .getRawOne();

    return result?.total || 0;
  }
}
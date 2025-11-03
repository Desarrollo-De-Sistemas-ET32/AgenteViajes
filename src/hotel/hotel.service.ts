import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, MoreThanOrEqual } from 'typeorm';
import { Hotel } from '../entities/hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = this.hotelRepository.create(createHotelDto);
    return await this.hotelRepository.save(hotel);
  }

  async findAll(): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      order: { hotelName: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({
      where: { id },
    });

    if (!hotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }

    return hotel;
  }

  async findWithTravels(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({
      where: { id },
      relations: ['travels'],
    });

    if (!hotel) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }

    return hotel;
  }

  async findByLocation(location: string): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      where: { location: Like(`%${location}%`) },
      order: { rating: 'DESC' },
    });
  }

  async findByStars(stars: number): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      where: { stars },
      order: { rating: 'DESC' },
    });
  }

  async findByMinRating(minRating: number): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      where: { rating: MoreThanOrEqual(minRating) },
      order: { rating: 'DESC' },
    });
  }

  async searchByName(searchTerm: string): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      where: { hotelName: Like(`%${searchTerm}%`) },
      order: { hotelName: 'ASC' },
    });
  }

  async findTopRated(limit: number = 10): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      order: { rating: 'DESC' },
      take: limit,
    });
  }

  async findByStarsAndLocation(stars: number, location: string): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      where: {
        stars,
        location: Like(`%${location}%`),
      },
      order: { rating: 'DESC' },
    });
  }

  async countByStars(stars: number): Promise<number> {
    return await this.hotelRepository.count({
      where: { stars },
    });
  }

  async countByLocation(location: string): Promise<number> {
    return await this.hotelRepository.count({
      where: { location: Like(`%${location}%`) },
    });
  }

  async getAverageRating(): Promise<number> {
    const result = await this.hotelRepository
      .createQueryBuilder('hotel')
      .select('AVG(hotel.rating)', 'avgRating')
      .where('hotel.rating IS NOT NULL')
      .getRawOne();

    return result?.avgRating || 0;
  }

  async getAverageRatingByLocation(location: string): Promise<number> {
    const result = await this.hotelRepository
      .createQueryBuilder('hotel')
      .select('AVG(hotel.rating)', 'avgRating')
      .where('hotel.location LIKE :location', { location: `%${location}%` })
      .andWhere('hotel.rating IS NOT NULL')
      .getRawOne();

    return result?.avgRating || 0;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
    const hotel = await this.findOne(id);

    Object.assign(hotel, updateHotelDto);
    return await this.hotelRepository.save(hotel);
  }

  async updateRating(id: number, rating: number): Promise<Hotel> {
    const hotel = await this.findOne(id);
    hotel.rating = rating;
    return await this.hotelRepository.save(hotel);
  }

  async remove(id: number): Promise<void> {
    const hotel = await this.findOne(id);
    await this.hotelRepository.remove(hotel);
  }
}
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { City } from '../entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    // Verificar si ya existe una ciudad con el mismo nombre
    const existing = await this.cityRepository.findOne({
      where: { cityName: createCityDto.cityName },
    });

    if (existing) {
      throw new ConflictException(`City with name ${createCityDto.cityName} already exists`);
    }

    const city = this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return await this.cityRepository.find({
      order: { cityName: 'ASC' },
    });
  }

  async findOne(id: number): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { idCity: id },
    });

    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }

    return city;
  }

  async findByName(cityName: string): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { cityName },
    });

    if (!city) {
      throw new NotFoundException(`City with name ${cityName} not found`);
    }

    return city;
  }

  async findByCountry(country: string): Promise<City[]> {
    return await this.cityRepository.find({
      where: { country },
      order: { cityName: 'ASC' },
    });
  }

  async searchByName(name: string): Promise<City[]> {
    return await this.cityRepository
      .createQueryBuilder('city')
      .where('city.cityName LIKE :name', { name: `%${name}%` })
      .orderBy('city.cityName', 'ASC')
      .getMany();
  }

  async findByMinRating(minRating: number): Promise<City[]> {
    return await this.cityRepository.find({
      where: {
        averageRating: MoreThanOrEqual(minRating),
      },
      order: { averageRating: 'DESC' },
    });
  }

  async findTopRated(limit: number = 10): Promise<City[]> {
    return await this.cityRepository.find({
      order: { averageRating: 'DESC' },
      take: limit,
    });
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);

    // Si se está actualizando el nombre, verificar que no exista
    if (updateCityDto.cityName && updateCityDto.cityName !== city.cityName) {
      const existing = await this.cityRepository.findOne({
        where: { cityName: updateCityDto.cityName },
      });

      if (existing) {
        throw new ConflictException(`City with name ${updateCityDto.cityName} already exists`);
      }
    }

    Object.assign(city, updateCityDto);
    return await this.cityRepository.save(city);
  }

  async updateRating(id: number, rating: number): Promise<City> {
    const city = await this.findOne(id);
    city.averageRating = rating;
    return await this.cityRepository.save(city);
  }

  async remove(id: number): Promise<void> {
    const city = await this.findOne(id);
    await this.cityRepository.remove(city);
  }

  async countByCountry(country: string): Promise<number> {
    return await this.cityRepository.count({
      where: { country },
    });
  }

  async getAllCountries(): Promise<string[]> {
    const cities = await this.cityRepository
      .createQueryBuilder('city')
      .select('DISTINCT city.country', 'country')
      .getRawMany();

    return cities.map(c => c.country);
  }

  async getAverageRatingByCountry(country: string): Promise<number> {
    const result = await this.cityRepository
      .createQueryBuilder('city')
      .select('AVG(city.averageRating)', 'average')
      .where('city.country = :country', { country })
      .getRawOne();

    return result?.average || 0;
  }
}
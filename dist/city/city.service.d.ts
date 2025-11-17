import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CityService {
    private readonly cityRepository;
    constructor(cityRepository: Repository<City>);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    findOne(id: number): Promise<City>;
    findByName(cityName: string): Promise<City>;
    findByCountry(country: string): Promise<City[]>;
    searchByName(name: string): Promise<City[]>;
    findByMinRating(minRating: number): Promise<City[]>;
    findTopRated(limit?: number): Promise<City[]>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<City>;
    updateRating(id: number, rating: number): Promise<City>;
    remove(id: number): Promise<void>;
    countByCountry(country: string): Promise<number>;
    getAllCountries(): Promise<string[]>;
    getAverageRatingByCountry(country: string): Promise<number>;
}

import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(createCityDto: CreateCityDto): Promise<import("../entities/city.entity").City>;
    findAll(): Promise<import("../entities/city.entity").City[]>;
    getAllCountries(): Promise<string[]>;
    findByCountry(country: string): Promise<import("../entities/city.entity").City[]>;
    countByCountry(country: string): Promise<{
        count: number;
    }>;
    getAverageRatingByCountry(country: string): Promise<{
        average: number;
    }>;
    searchByName(name: string): Promise<import("../entities/city.entity").City[]>;
    findByName(cityName: string): Promise<import("../entities/city.entity").City>;
    findByMinRating(minRating: number): Promise<import("../entities/city.entity").City[]>;
    findTopRated(limit?: number): Promise<import("../entities/city.entity").City[]>;
    findOne(id: number): Promise<import("../entities/city.entity").City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<import("../entities/city.entity").City>;
    updateRating(id: number, body: {
        rating: number;
    }): Promise<import("../entities/city.entity").City>;
    remove(id: number): Promise<void>;
}

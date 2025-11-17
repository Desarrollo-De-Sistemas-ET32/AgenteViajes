import { Repository } from 'typeorm';
import { Hotel } from '../entities/hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelService {
    private hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    create(createHotelDto: CreateHotelDto): Promise<Hotel>;
    findAll(): Promise<Hotel[]>;
    findOne(id: number): Promise<Hotel>;
    findWithTravels(id: number): Promise<Hotel>;
    findByCity(cityId: number): Promise<Hotel[]>;
    findByStars(stars: number): Promise<Hotel[]>;
    findByMinRating(minRating: number): Promise<Hotel[]>;
    searchByName(searchTerm: string): Promise<Hotel[]>;
    findTopRated(limit?: number): Promise<Hotel[]>;
    findByStarsAndCity(stars: number, cityId: number): Promise<Hotel[]>;
    countByStars(stars: number): Promise<number>;
    countByCity(cityId: number): Promise<number>;
    getAverageRating(): Promise<number>;
    getAverageRatingByCity(cityId: number): Promise<number>;
    update(id: number, updateHotelDto: UpdateHotelDto): Promise<Hotel>;
    updateRating(id: number, rating: number): Promise<Hotel>;
    remove(id: number): Promise<void>;
}

import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): Promise<import("../entities/hotel.entity").Hotel>;
    findAll(): Promise<import("../entities/hotel.entity").Hotel[]>;
    findTopRated(limit?: number): Promise<import("../entities/hotel.entity").Hotel[]>;
    searchByName(searchTerm: string): Promise<import("../entities/hotel.entity").Hotel[]>;
    findByCity(cityId: number): Promise<import("../entities/hotel.entity").Hotel[]>;
    countByCity(cityId: number): Promise<number>;
    getAverageRatingByCity(cityId: number): Promise<number>;
    findByStars(stars: number): Promise<import("../entities/hotel.entity").Hotel[]>;
    countByStars(stars: number): Promise<number>;
    findByStarsAndCity(stars: number, cityId: number): Promise<import("../entities/hotel.entity").Hotel[]>;
    findByMinRating(minRating: number): Promise<import("../entities/hotel.entity").Hotel[]>;
    getAverageRating(): Promise<number>;
    findOne(id: number): Promise<import("../entities/hotel.entity").Hotel>;
    findWithTravels(id: number): Promise<import("../entities/hotel.entity").Hotel>;
    update(id: number, updateHotelDto: UpdateHotelDto): Promise<import("../entities/hotel.entity").Hotel>;
    updateRating(id: number, rating: number): Promise<import("../entities/hotel.entity").Hotel>;
    remove(id: number): Promise<void>;
}

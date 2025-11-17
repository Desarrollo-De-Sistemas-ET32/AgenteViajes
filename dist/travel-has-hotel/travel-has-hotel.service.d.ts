import { Repository } from 'typeorm';
import { TravelHasHotel } from '../entities/travel-has-hotel.entity';
import { CreateTravelHasHotelDto } from './dto/create-travel-has-hotel.dto';
import { UpdateTravelHasHotelDto } from './dto/update-travel-has-hotel.dto';
export declare class TravelHasHotelService {
    private readonly travelHasHotelRepository;
    constructor(travelHasHotelRepository: Repository<TravelHasHotel>);
    create(createTravelHasHotelDto: CreateTravelHasHotelDto): Promise<TravelHasHotel>;
    findAll(): Promise<TravelHasHotel[]>;
    findOne(travelId: number, hotelId: number): Promise<TravelHasHotel>;
    findByTravel(travelId: number): Promise<TravelHasHotel[]>;
    findByHotel(hotelId: number): Promise<TravelHasHotel[]>;
    update(travelId: number, hotelId: number, updateTravelHasHotelDto: UpdateTravelHasHotelDto): Promise<TravelHasHotel>;
    remove(travelId: number, hotelId: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    removeAllByHotel(hotelId: number): Promise<void>;
    countByTravel(travelId: number): Promise<number>;
    countByHotel(hotelId: number): Promise<number>;
    getTotalRoomsByTravel(travelId: number): Promise<number>;
}

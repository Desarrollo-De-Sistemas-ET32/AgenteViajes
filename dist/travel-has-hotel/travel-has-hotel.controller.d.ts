import { TravelHasHotelService } from './travel-has-hotel.service';
import { CreateTravelHasHotelDto } from './dto/create-travel-has-hotel.dto';
import { UpdateTravelHasHotelDto } from './dto/update-travel-has-hotel.dto';
export declare class TravelHasHotelController {
    private readonly travelHasHotelService;
    constructor(travelHasHotelService: TravelHasHotelService);
    create(createTravelHasHotelDto: CreateTravelHasHotelDto): Promise<import("../entities/travel-has-hotel.entity").TravelHasHotel>;
    findAll(): Promise<import("../entities/travel-has-hotel.entity").TravelHasHotel[]>;
    findByTravel(travelId: number): Promise<import("../entities/travel-has-hotel.entity").TravelHasHotel[]>;
    countByTravel(travelId: number): Promise<{
        count: number;
    }>;
    getTotalRoomsByTravel(travelId: number): Promise<{
        total: number;
    }>;
    findByHotel(hotelId: number): Promise<import("../entities/travel-has-hotel.entity").TravelHasHotel[]>;
    countByHotel(hotelId: number): Promise<{
        count: number;
    }>;
    findOne(travelId: number, hotelId: number): Promise<import("../entities/travel-has-hotel.entity").TravelHasHotel>;
    update(travelId: number, hotelId: number, updateTravelHasHotelDto: UpdateTravelHasHotelDto): Promise<import("../entities/travel-has-hotel.entity").TravelHasHotel>;
    remove(travelId: number, hotelId: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    removeAllByHotel(hotelId: number): Promise<void>;
}

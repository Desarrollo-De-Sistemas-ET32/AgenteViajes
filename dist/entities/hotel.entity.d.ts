import { City } from './city.entity';
import { TravelHasHotel } from './travel-has-hotel.entity';
export declare class Hotel {
    id: number;
    hotelName: string;
    cityId: number;
    stars: number;
    imagePath: string;
    description: string;
    amenities: string;
    rating: number;
    city: City;
    travels: TravelHasHotel[];
}

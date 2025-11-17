import { Travel } from './travel.entity';
import { Hotel } from './hotel.entity';
export declare class TravelHasHotel {
    travelIdTravel: number;
    hotelIdHotel: number;
    checkInDate: Date;
    checkOutDate: Date;
    roomType: string;
    numberOfRooms: number;
    travel: Travel;
    hotel: Hotel;
}

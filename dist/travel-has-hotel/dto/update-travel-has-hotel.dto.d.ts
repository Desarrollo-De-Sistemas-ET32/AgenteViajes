import { CreateTravelHasHotelDto } from './create-travel-has-hotel.dto';
declare const UpdateTravelHasHotelDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateTravelHasHotelDto, "travelIdTravel" | "hotelIdHotel">>>;
export declare class UpdateTravelHasHotelDto extends UpdateTravelHasHotelDto_base {
}
export {};

import { CreateTravelHasFlightDto } from './create-travel-has-flight.dto';
declare const UpdateTravelHasFlightDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateTravelHasFlightDto, "travelIdTravel" | "flightIdFlight">>>;
export declare class UpdateTravelHasFlightDto extends UpdateTravelHasFlightDto_base {
}
export {};

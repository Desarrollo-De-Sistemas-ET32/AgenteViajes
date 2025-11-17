import { FlightType } from '../../entities/travel-has-flight.entity';
export declare class CreateTravelHasFlightDto {
    travelIdTravel: number;
    flightIdFlight: number;
    flightType?: FlightType;
}

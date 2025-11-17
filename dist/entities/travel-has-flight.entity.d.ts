import { Travel } from './travel.entity';
import { Flight } from './flights.entity';
export declare enum FlightType {
    OUTBOUND = "Outbound",
    RETURN = "Return",
    CONNECTING = "Connecting"
}
export declare class TravelHasFlight {
    travelIdTravel: number;
    flightIdFlight: number;
    flightType: FlightType;
    travel: Travel;
    flight: Flight;
}

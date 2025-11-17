import { TravelHasFlightService } from './travel-has-flight.service';
import { CreateTravelHasFlightDto } from './dto/create-travel-has-flight.dto';
import { UpdateTravelHasFlightDto } from './dto/update-travel-has-flight.dto';
import { FlightType } from '../entities/travel-has-flight.entity';
export declare class TravelHasFlightController {
    private readonly travelHasFlightService;
    constructor(travelHasFlightService: TravelHasFlightService);
    create(createTravelHasFlightDto: CreateTravelHasFlightDto): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight>;
    findAll(): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight[]>;
    findByTravel(travelId: number): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight[]>;
    countByTravel(travelId: number): Promise<{
        count: number;
    }>;
    findByFlightType(travelId: number, flightType: FlightType): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight[]>;
    countByFlightType(travelId: number, flightType: FlightType): Promise<{
        count: number;
    }>;
    findByFlight(flightId: number): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight[]>;
    countByFlight(flightId: number): Promise<{
        count: number;
    }>;
    findOne(travelId: number, flightId: number): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight>;
    update(travelId: number, flightId: number, updateTravelHasFlightDto: UpdateTravelHasFlightDto): Promise<import("../entities/travel-has-flight.entity").TravelHasFlight>;
    remove(travelId: number, flightId: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    removeAllByFlight(flightId: number): Promise<void>;
}

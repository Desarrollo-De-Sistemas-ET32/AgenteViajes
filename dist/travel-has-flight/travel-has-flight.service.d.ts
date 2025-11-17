import { Repository } from 'typeorm';
import { TravelHasFlight, FlightType } from '../entities/travel-has-flight.entity';
import { CreateTravelHasFlightDto } from './dto/create-travel-has-flight.dto';
import { UpdateTravelHasFlightDto } from './dto/update-travel-has-flight.dto';
export declare class TravelHasFlightService {
    private readonly travelHasFlightRepository;
    constructor(travelHasFlightRepository: Repository<TravelHasFlight>);
    create(createTravelHasFlightDto: CreateTravelHasFlightDto): Promise<TravelHasFlight>;
    findAll(): Promise<TravelHasFlight[]>;
    findOne(travelId: number, flightId: number): Promise<TravelHasFlight>;
    findByTravel(travelId: number): Promise<TravelHasFlight[]>;
    findByFlight(flightId: number): Promise<TravelHasFlight[]>;
    findByFlightType(travelId: number, flightType: FlightType): Promise<TravelHasFlight[]>;
    update(travelId: number, flightId: number, updateTravelHasFlightDto: UpdateTravelHasFlightDto): Promise<TravelHasFlight>;
    remove(travelId: number, flightId: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    removeAllByFlight(flightId: number): Promise<void>;
    countByTravel(travelId: number): Promise<number>;
    countByFlight(flightId: number): Promise<number>;
    countByFlightType(travelId: number, flightType: FlightType): Promise<number>;
}

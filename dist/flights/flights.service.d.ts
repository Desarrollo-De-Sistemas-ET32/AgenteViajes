import { Repository } from 'typeorm';
import { Flight, FlightClass, FlightStatus } from '../entities/flights.entity';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';
export declare class FlightService {
    private readonly flightRepository;
    constructor(flightRepository: Repository<Flight>);
    create(createFlightDto: CreateFlightDto): Promise<Flight>;
    findAll(): Promise<Flight[]>;
    findOne(id: number): Promise<Flight>;
    findByUser(userId: number): Promise<Flight[]>;
    findByStatus(status: FlightStatus): Promise<Flight[]>;
    findByClass(flightClass: FlightClass): Promise<Flight[]>;
    findByAirline(airline: string): Promise<Flight[]>;
    findByOrigin(origin: string): Promise<Flight[]>;
    findByDestination(destination: string): Promise<Flight[]>;
    findByRoute(origin: string, destination: string): Promise<Flight[]>;
    findByDateRange(startDate: Date, endDate: Date): Promise<Flight[]>;
    findUpcomingByUser(userId: number): Promise<Flight[]>;
    update(id: number, updateFlightDto: UpdateFlightDto): Promise<Flight>;
    updateStatus(id: number, status: FlightStatus): Promise<Flight>;
    cancelFlight(id: number): Promise<Flight>;
    confirmFlight(id: number): Promise<Flight>;
    completeFlight(id: number): Promise<Flight>;
    remove(id: number): Promise<void>;
    getTotalCostByUser(userId: number): Promise<number>;
    countByUser(userId: number): Promise<number>;
    countByStatus(status: FlightStatus): Promise<number>;
}

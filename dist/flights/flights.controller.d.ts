import { FlightService } from './flights.service';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';
import { FlightClass, FlightStatus } from '../entities/flights.entity';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    create(createFlightDto: CreateFlightDto): Promise<import("../entities/flights.entity").Flight>;
    findAll(): Promise<import("../entities/flights.entity").Flight[]>;
    findByUser(userId: number): Promise<import("../entities/flights.entity").Flight[]>;
    findUpcomingByUser(userId: number): Promise<import("../entities/flights.entity").Flight[]>;
    getTotalCostByUser(userId: number): Promise<{
        total: number;
    }>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    findByStatus(status: FlightStatus): Promise<import("../entities/flights.entity").Flight[]>;
    countByStatus(status: FlightStatus): Promise<{
        count: number;
    }>;
    findByClass(flightClass: FlightClass): Promise<import("../entities/flights.entity").Flight[]>;
    findByAirline(airline: string): Promise<import("../entities/flights.entity").Flight[]>;
    findByOrigin(origin: string): Promise<import("../entities/flights.entity").Flight[]>;
    findByDestination(destination: string): Promise<import("../entities/flights.entity").Flight[]>;
    findByRoute(origin: string, destination: string): Promise<import("../entities/flights.entity").Flight[]>;
    findByDateRange(startDate: string, endDate: string): Promise<import("../entities/flights.entity").Flight[]>;
    findOne(id: number): Promise<import("../entities/flights.entity").Flight>;
    update(id: number, updateFlightDto: UpdateFlightDto): Promise<import("../entities/flights.entity").Flight>;
    updateStatus(id: number, body: {
        status: FlightStatus;
    }): Promise<import("../entities/flights.entity").Flight>;
    cancelFlight(id: number): Promise<import("../entities/flights.entity").Flight>;
    confirmFlight(id: number): Promise<import("../entities/flights.entity").Flight>;
    completeFlight(id: number): Promise<import("../entities/flights.entity").Flight>;
    remove(id: number): Promise<void>;
}

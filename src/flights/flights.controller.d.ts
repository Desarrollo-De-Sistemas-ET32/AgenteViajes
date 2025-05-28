import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';
export declare class FlightsController {
    private readonly flightsService;
    constructor(flightsService: FlightsService);
    create(createFlightDto: CreateFlightDto): Promise<import("./flights.entity").Flights>;
    findAll(): Promise<import("./flights.entity").Flights[]>;
    findOne(id: string): Promise<import("./flights.entity").Flights | null>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

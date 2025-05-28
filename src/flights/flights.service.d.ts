import { Repository } from 'typeorm';
import { Flights } from './flights.entity';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';
export declare class FlightsService {
    private readonly flightsRepository;
    constructor(flightsRepository: Repository<Flights>);
    create(createFlightDto: CreateFlightDto): Promise<Flights>;
    findAll(): Promise<Flights[]>;
    findOne(id: number): Promise<Flights | null>;
    update(id: number, updateFlightDto: UpdateFlightDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

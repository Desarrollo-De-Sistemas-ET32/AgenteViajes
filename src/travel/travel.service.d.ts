import { Repository } from 'typeorm';
import { Travel } from './travel.entity';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
export declare class TravelService {
    private readonly travelRepository;
    constructor(travelRepository: Repository<Travel>);
    create(createTravelDto: CreateTravelDto): Promise<Travel>;
    findAll(): Promise<Travel[]>;
    findOne(id: number): Promise<Travel | null>;
    update(id: number, updateTravelDto: UpdateTravelDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

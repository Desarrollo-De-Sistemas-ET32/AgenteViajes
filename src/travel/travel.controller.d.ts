import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
export declare class TravelController {
    private readonly travelService;
    constructor(travelService: TravelService);
    create(createTravelDto: CreateTravelDto): Promise<import("./travel.entity").Travel>;
    findAll(): Promise<import("./travel.entity").Travel[]>;
    findOne(id: string): Promise<import("./travel.entity").Travel | null>;
    update(id: string, updateTravelDto: UpdateTravelDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

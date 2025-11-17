import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { TravelStatus, TravelStyle, AccommodationType } from '../entities/travel.entity';
export declare class TravelController {
    private readonly travelService;
    constructor(travelService: TravelService);
    create(createTravelDto: CreateTravelDto): Promise<import("../entities/travel.entity").Travel>;
    findAll(): Promise<import("../entities/travel.entity").Travel[]>;
    findUpcoming(): Promise<import("../entities/travel.entity").Travel[]>;
    findPast(): Promise<import("../entities/travel.entity").Travel[]>;
    findByStatus(status: TravelStatus): Promise<import("../entities/travel.entity").Travel[]>;
    countByStatus(status: TravelStatus): Promise<number>;
    findByDestination(destination: string): Promise<import("../entities/travel.entity").Travel[]>;
    findByTravelStyle(travelStyle: TravelStyle): Promise<import("../entities/travel.entity").Travel[]>;
    findByAccommodationType(accommodationType: AccommodationType): Promise<import("../entities/travel.entity").Travel[]>;
    findByDateRange(startDate: string, endDate: string): Promise<import("../entities/travel.entity").Travel[]>;
    findByUser(userId: number): Promise<import("../entities/travel.entity").Travel[]>;
    countByUser(userId: number): Promise<number>;
    getTotalCostByUser(userId: number): Promise<number>;
    findOne(id: number): Promise<import("../entities/travel.entity").Travel>;
    findWithRelations(id: number): Promise<import("../entities/travel.entity").Travel>;
    update(id: number, updateTravelDto: UpdateTravelDto): Promise<import("../entities/travel.entity").Travel>;
    updateStatus(id: number, status: TravelStatus): Promise<import("../entities/travel.entity").Travel>;
    remove(id: number): Promise<void>;
}

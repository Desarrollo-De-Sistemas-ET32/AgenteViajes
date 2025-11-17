import { TravelCompanionService } from './travel-companion.service';
import { CreateTravelCompanionDto } from './dto/create-travel-companion.dto';
import { UpdateTravelCompanionDto } from './dto/update-travel-companion.dto';
export declare class TravelCompanionController {
    private readonly travelCompanionService;
    constructor(travelCompanionService: TravelCompanionService);
    create(createTravelCompanionDto: CreateTravelCompanionDto): Promise<import("../entities/travel-companion.entity").TravelCompanion>;
    findAll(): Promise<import("../entities/travel-companion.entity").TravelCompanion[]>;
    findByTravel(travelId: number): Promise<import("../entities/travel-companion.entity").TravelCompanion[]>;
    countByTravel(travelId: number): Promise<{
        count: number;
    }>;
    hasEmail(travelId: number, email: string): Promise<{
        hasEmail: boolean;
    }>;
    findByRelationship(relationship: string): Promise<import("../entities/travel-companion.entity").TravelCompanion[]>;
    countByRelationship(relationship: string): Promise<{
        count: number;
    }>;
    findByEmail(email: string): Promise<import("../entities/travel-companion.entity").TravelCompanion[]>;
    searchByName(name: string): Promise<import("../entities/travel-companion.entity").TravelCompanion[]>;
    findOne(id: number): Promise<import("../entities/travel-companion.entity").TravelCompanion>;
    getFullName(id: number): Promise<{
        fullName: string;
    }>;
    update(id: number, updateTravelCompanionDto: UpdateTravelCompanionDto): Promise<import("../entities/travel-companion.entity").TravelCompanion>;
    remove(id: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
}

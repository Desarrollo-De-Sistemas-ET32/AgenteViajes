import { Repository } from 'typeorm';
import { TravelCompanion } from '../entities/travel-companion.entity';
import { CreateTravelCompanionDto } from './dto/create-travel-companion.dto';
import { UpdateTravelCompanionDto } from './dto/update-travel-companion.dto';
export declare class TravelCompanionService {
    private readonly travelCompanionRepository;
    constructor(travelCompanionRepository: Repository<TravelCompanion>);
    create(createTravelCompanionDto: CreateTravelCompanionDto): Promise<TravelCompanion>;
    findAll(): Promise<TravelCompanion[]>;
    findOne(id: number): Promise<TravelCompanion>;
    findByTravel(travelId: number): Promise<TravelCompanion[]>;
    findByRelationship(relationship: string): Promise<TravelCompanion[]>;
    findByEmail(email: string): Promise<TravelCompanion[]>;
    searchByName(name: string): Promise<TravelCompanion[]>;
    update(id: number, updateTravelCompanionDto: UpdateTravelCompanionDto): Promise<TravelCompanion>;
    remove(id: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    countByTravel(travelId: number): Promise<number>;
    countByRelationship(relationship: string): Promise<number>;
    hasEmail(travelId: number, email: string): Promise<boolean>;
    getFullName(id: number): Promise<string>;
}

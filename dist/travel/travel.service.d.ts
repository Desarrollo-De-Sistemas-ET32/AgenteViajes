import { Repository } from 'typeorm';
import { Travel, TravelStatus, TravelStyle, AccommodationType } from '../entities/travel.entity';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
export declare class TravelService {
    private travelRepository;
    constructor(travelRepository: Repository<Travel>);
    create(createTravelDto: CreateTravelDto): Promise<Travel>;
    findAll(): Promise<Travel[]>;
    findOne(id: number): Promise<Travel>;
    findWithRelations(id: number): Promise<Travel>;
    findByUser(userId: number): Promise<Travel[]>;
    findByStatus(status: TravelStatus): Promise<Travel[]>;
    findByDestination(destination: string): Promise<Travel[]>;
    findByDateRange(startDate: Date, endDate: Date): Promise<Travel[]>;
    findUpcoming(): Promise<Travel[]>;
    findPast(): Promise<Travel[]>;
    findByTravelStyle(travelStyle: TravelStyle): Promise<Travel[]>;
    findByAccommodationType(accommodationType: AccommodationType): Promise<Travel[]>;
    countByUser(userId: number): Promise<number>;
    countByStatus(status: TravelStatus): Promise<number>;
    getTotalCostByUser(userId: number): Promise<number>;
    update(id: number, updateTravelDto: UpdateTravelDto): Promise<Travel>;
    updateStatus(id: number, status: TravelStatus): Promise<Travel>;
    remove(id: number): Promise<void>;
}

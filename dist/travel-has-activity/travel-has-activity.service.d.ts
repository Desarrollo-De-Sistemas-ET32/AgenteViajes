import { Repository } from 'typeorm';
import { TravelHasActivity } from '../entities/travel-has-activity.entity';
import { CreateTravelHasActivityDto } from './dto/create-travel-has-activity.dto';
import { UpdateTravelHasActivityDto } from './dto/update-travel-has-activity.dto';
export declare class TravelHasActivityService {
    private travelHasActivityRepository;
    constructor(travelHasActivityRepository: Repository<TravelHasActivity>);
    create(createTravelHasActivityDto: CreateTravelHasActivityDto): Promise<TravelHasActivity>;
    findAll(): Promise<TravelHasActivity[]>;
    findOne(travelId: number, activityId: number): Promise<TravelHasActivity>;
    findByTravel(travelId: number): Promise<TravelHasActivity[]>;
    findByActivity(activityId: number): Promise<TravelHasActivity[]>;
    findByTravelWithDate(travelId: number, startDate: Date, endDate: Date): Promise<TravelHasActivity[]>;
    countActivitiesByTravel(travelId: number): Promise<number>;
    countTravelsByActivity(activityId: number): Promise<number>;
    getTotalParticipantsByTravel(travelId: number): Promise<number>;
    update(travelId: number, activityId: number, updateTravelHasActivityDto: UpdateTravelHasActivityDto): Promise<TravelHasActivity>;
    remove(travelId: number, activityId: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    removeAllByActivity(activityId: number): Promise<void>;
}

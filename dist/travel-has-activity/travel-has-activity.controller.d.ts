import { TravelHasActivityService } from './travel-has-activity.service';
import { CreateTravelHasActivityDto } from './dto/create-travel-has-activity.dto';
import { UpdateTravelHasActivityDto } from './dto/update-travel-has-activity.dto';
export declare class TravelHasActivityController {
    private readonly travelHasActivityService;
    constructor(travelHasActivityService: TravelHasActivityService);
    create(createTravelHasActivityDto: CreateTravelHasActivityDto): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity>;
    findAll(): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity[]>;
    findOne(travelId: number, activityId: number): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity>;
    findByTravel(travelId: number): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity[]>;
    findByActivity(activityId: number): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity[]>;
    findByTravelWithDate(travelId: number, startDate: string, endDate: string): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity[]>;
    countActivitiesByTravel(travelId: number): Promise<number>;
    countTravelsByActivity(activityId: number): Promise<number>;
    getTotalParticipantsByTravel(travelId: number): Promise<number>;
    update(travelId: number, activityId: number, updateTravelHasActivityDto: UpdateTravelHasActivityDto): Promise<import("../entities/travel-has-activity.entity").TravelHasActivity>;
    remove(travelId: number, activityId: number): Promise<void>;
    removeAllByTravel(travelId: number): Promise<void>;
    removeAllByActivity(activityId: number): Promise<void>;
}

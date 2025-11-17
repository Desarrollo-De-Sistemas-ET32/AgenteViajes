import { Travel } from './travel.entity';
import { Activity } from './activity.entity';
export declare class TravelHasActivity {
    travelId: number;
    activityId: number;
    scheduledDate: Date;
    numberOfParticipants: number;
    specialRequirements: string;
    travel: Travel;
    activity: Activity;
}

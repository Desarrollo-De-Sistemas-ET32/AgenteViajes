import { ActivityCategory } from '../../entities/activity.entity';
export declare class CreateActivityDto {
    activityName: string;
    cityId: number;
    cost?: number;
    duration?: string;
    category?: ActivityCategory;
    mediaPath?: string;
    description?: string;
    rating?: number;
}

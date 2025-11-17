import { CreateTravelHasActivityDto } from './create-travel-has-activity.dto';
declare const UpdateTravelHasActivityDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateTravelHasActivityDto, "travelId" | "activityId">>>;
export declare class UpdateTravelHasActivityDto extends UpdateTravelHasActivityDto_base {
}
export {};

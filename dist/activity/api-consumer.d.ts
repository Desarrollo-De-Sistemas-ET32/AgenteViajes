interface CreateActivityDto {
    name: string;
    description: string;
}
interface UpdateActivityDto {
    name?: string;
    description?: string;
}
export declare const createActivity: (activityData: CreateActivityDto) => Promise<any>;
export declare const getAllActivities: () => Promise<any>;
export declare const getActivityById: (id: number) => Promise<any>;
export declare const updateActivity: (id: number, updateData: UpdateActivityDto) => Promise<any>;
export declare const deleteActivity: (id: number) => Promise<any>;
export {};

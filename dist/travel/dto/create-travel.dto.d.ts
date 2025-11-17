import { TravelStatus, TravelStyle, AccommodationType } from '../../entities/travel.entity';
export declare class CreateTravelDto {
    userId?: number;
    travelName: string;
    destination: string;
    startDate?: Date;
    endDate?: Date;
    totalCost?: number;
    documentPath?: string;
    status?: TravelStatus;
    travelStyle?: TravelStyle;
    accommodationType?: AccommodationType;
}

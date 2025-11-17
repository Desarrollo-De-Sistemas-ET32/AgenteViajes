import { User } from './user.entity';
import { TravelCompanion } from './travel-companion.entity';
import { TravelHasHotel } from './travel-has-hotel.entity';
import { TravelHasFlight } from './travel-has-flight.entity';
import { TravelHasActivity } from './travel-has-activity.entity';
export declare enum TravelStatus {
    PLANNING = "Planning",
    CONFIRMED = "Confirmed",
    IN_PROGRESS = "In Progress",
    COMPLETED = "Completed",
    CANCELLED = "Cancelled"
}
export declare enum TravelStyle {
    PREFERRED = "Preferred",
    ALTERNATIVE = "Alternative"
}
export declare enum AccommodationType {
    HOTEL_LUJO = "Hotel de Lujo",
    BOUTIQUE_HOTEL = "Boutique Hotel",
    APARTAMENTO = "Apartamento",
    CASA_RURAL = "Casa Rural",
    HOSTAL = "Hostal"
}
export declare class Travel {
    id: number;
    userId: number;
    travelName: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    totalCost: number;
    documentPath: string;
    status: TravelStatus;
    travelStyle: TravelStyle;
    accommodationType: AccommodationType;
    createdAt: Date;
    user: User;
    companions: TravelCompanion[];
    hotels: TravelHasHotel[];
    flights: TravelHasFlight[];
    activities: TravelHasActivity[];
}

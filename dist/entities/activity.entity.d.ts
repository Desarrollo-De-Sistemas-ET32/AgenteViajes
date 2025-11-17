import { City } from './city.entity';
import { TravelHasActivity } from './travel-has-activity.entity';
export declare enum ActivityCategory {
    MUSICA = "M\u00FAsica",
    HISTORIA = "Historia",
    AVENTURA = "Aventura",
    GASTRONOMIA = "Gastronom\u00EDa",
    CULTURA = "Cultura",
    NATURALEZA = "Naturaleza",
    DEPORTES = "Deportes"
}
export declare class Activity {
    id: number;
    activityName: string;
    cityId: number;
    cost: number;
    duration: string;
    category: ActivityCategory;
    mediaPath: string;
    description: string;
    rating: number;
    city: City;
    travels: TravelHasActivity[];
}

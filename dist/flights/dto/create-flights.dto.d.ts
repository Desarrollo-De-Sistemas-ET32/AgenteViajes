import { FlightClass, FlightStatus } from '../../entities/flights.entity';
export declare class CreateFlightDto {
    idUser?: number;
    flightNumber?: string;
    airline?: string;
    origin?: string;
    destination?: string;
    departureDate?: Date;
    arrivalDate?: Date;
    totalCost?: number;
    class?: FlightClass;
    status?: FlightStatus;
}

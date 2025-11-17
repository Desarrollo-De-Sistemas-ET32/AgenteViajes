import { User } from './user.entity';
export declare enum FlightClass {
    ECONOMY = "Economy",
    PREMIUM = "Premium",
    BUSINESS = "Business",
    FIRST = "First"
}
export declare enum FlightStatus {
    BOOKED = "Booked",
    CONFIRMED = "Confirmed",
    CANCELLED = "Cancelled",
    COMPLETED = "Completed"
}
export declare class Flight {
    idFlight: number;
    idUser: number;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    totalCost: number;
    class: FlightClass;
    status: FlightStatus;
    user: User;
}

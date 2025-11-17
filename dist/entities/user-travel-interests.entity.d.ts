import { User } from './user.entity';
export declare enum InterestCategory {
    GASTRONOMIA = "Gastronom\u00EDa",
    NATURALEZA = "Naturaleza",
    HISTORIA = "Historia",
    AVENTURA = "Aventura",
    MUSICA = "M\u00FAsica",
    CULTURA = "Cultura",
    FOTOGRAFIA = "Fotograf\u00EDa"
}
export declare class UserTravelInterest {
    idInterest: number;
    idUser: number;
    interestCategory: InterestCategory;
    priority: number;
    user: User;
}

import { InterestCategory } from '../../entities/user-travel-interests.entity';
export declare class CreateUserTravelInterestDto {
    idUser: number;
    interestCategory: InterestCategory;
    priority?: number;
}

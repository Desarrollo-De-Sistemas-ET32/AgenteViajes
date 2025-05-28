import { Repository } from 'typeorm';
import { Hotel } from './hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelService {
    private readonly hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    create(createHotelDto: CreateHotelDto): Promise<Hotel>;
    findAll(): Promise<Hotel[]>;
    findOne(id: number): Promise<Hotel | null>;
    update(id: number, updateHotelDto: UpdateHotelDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

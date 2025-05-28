import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): Promise<import("./hotel.entity").Hotel>;
    findAll(): Promise<import("./hotel.entity").Hotel[]>;
    findOne(id: string): Promise<import("./hotel.entity").Hotel | null>;
    update(id: string, updateHotelDto: UpdateHotelDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

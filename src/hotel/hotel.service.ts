import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
    const hotel = this.hotelRepository.create(createHotelDto);
    return this.hotelRepository.save(hotel);
  }

  findAll() {
    return this.hotelRepository.find();
  }

  findOne(id: number) {
    return this.hotelRepository.findOneBy({ ID_Hotel: id });
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return this.hotelRepository.update(id, updateHotelDto);
  }

  remove(id: number) {
    return this.hotelRepository.delete(id);
  }
}

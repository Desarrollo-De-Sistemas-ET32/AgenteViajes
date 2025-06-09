import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from './travel.entity';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  constructor(
    @InjectRepository(Travel)
    private readonly travelRepository: Repository<Travel>,
  ) {}

  create(createTravelDto: CreateTravelDto) {
    const travel = this.travelRepository.create(createTravelDto);
    return this.travelRepository.save(travel);
  }

  findAll() {
    return this.travelRepository.find();
  }

  findOne(id: number) {
    return this.travelRepository.findOneBy({ ID_Travel: id });
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return this.travelRepository.update(id, updateTravelDto);
  }

  remove(id: number) {
    return this.travelRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flights } from './flights.entity';
import { CreateFlightDto } from './dto/create-flights.dto';
import { UpdateFlightDto } from './dto/update-flights.dto';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly flightsRepository: Repository<Flights>,
  ) {}

  create(createFlightDto: CreateFlightDto) {
    const flight = this.flightsRepository.create(createFlightDto);
    return this.flightsRepository.save(flight);
  }

  findAll() {
    return this.flightsRepository.find();
  }

  findOne(id: number) {
    return this.flightsRepository.findOneBy({ ID_Flight: id });
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return this.flightsRepository.update(id, updateFlightDto);
  }

  remove(id: number) {
    return this.flightsRepository.delete(id);
  }
}

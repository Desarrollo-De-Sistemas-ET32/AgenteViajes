import { Test, TestingModule } from '@nestjs/testing';
import { FlightsService } from './flights.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Flights } from '../entities/flights.entity';
import { Repository } from 'typeorm';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FlightsService,
        {
          provide: getRepositoryToken(Flights),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<FlightsService>(FlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

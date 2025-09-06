import { Test, TestingModule } from '@nestjs/testing';
import { TravelService } from './travel.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Travel } from '../entities/travel.entity';
import { Repository } from 'typeorm';

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TravelService,
        {
          provide: getRepositoryToken(Travel),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TravelService>(TravelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

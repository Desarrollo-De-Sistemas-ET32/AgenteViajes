import { Test, TestingModule } from '@nestjs/testing';
import { TravelCompanionService } from './travel-companion.service';

describe('TravelCompanionService', () => {
  let service: TravelCompanionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelCompanionService],
    }).compile();

    service = module.get<TravelCompanionService>(TravelCompanionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

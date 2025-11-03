import { Test, TestingModule } from '@nestjs/testing';
import { TravelHasFlightService } from './travel-has-flight.service';

describe('TravelHasFlightService', () => {
  let service: TravelHasFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelHasFlightService],
    }).compile();

    service = module.get<TravelHasFlightService>(TravelHasFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

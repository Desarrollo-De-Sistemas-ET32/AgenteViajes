import { Test, TestingModule } from '@nestjs/testing';
import { TravelHasHotelService } from './travel-has-hotel.service';

describe('TravelHasHotelService', () => {
  let service: TravelHasHotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelHasHotelService],
    }).compile();

    service = module.get<TravelHasHotelService>(TravelHasHotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

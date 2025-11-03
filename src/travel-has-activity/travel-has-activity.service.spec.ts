import { Test, TestingModule } from '@nestjs/testing';
import { TravelHasActivityService } from './travel-has-activity.service';

describe('TravelHasActivityService', () => {
  let service: TravelHasActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelHasActivityService],
    }).compile();

    service = module.get<TravelHasActivityService>(TravelHasActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

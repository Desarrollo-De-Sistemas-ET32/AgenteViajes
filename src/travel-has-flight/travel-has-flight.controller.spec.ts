import { Test, TestingModule } from '@nestjs/testing';
import { TravelHasFlightController } from './travel-has-flight.controller';

describe('TravelHasFlightController', () => {
  let controller: TravelHasFlightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelHasFlightController],
    }).compile();

    controller = module.get<TravelHasFlightController>(TravelHasFlightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TravelHasHotelController } from './travel-has-hotel.controller';

describe('TravelHasHotelController', () => {
  let controller: TravelHasHotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelHasHotelController],
    }).compile();

    controller = module.get<TravelHasHotelController>(TravelHasHotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

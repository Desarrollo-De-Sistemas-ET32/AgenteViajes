import { Test, TestingModule } from '@nestjs/testing';
import { TravelHasActivityController } from './travel-has-activity.controller';

describe('TravelHasActivityController', () => {
  let controller: TravelHasActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelHasActivityController],
    }).compile();

    controller = module.get<TravelHasActivityController>(TravelHasActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

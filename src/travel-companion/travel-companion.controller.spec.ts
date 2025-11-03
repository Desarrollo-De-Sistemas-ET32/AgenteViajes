import { Test, TestingModule } from '@nestjs/testing';
import { TravelCompanionController } from './travel-companion.controller';

describe('TravelCompanionController', () => {
  let controller: TravelCompanionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelCompanionController],
    }).compile();

    controller = module.get<TravelCompanionController>(TravelCompanionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

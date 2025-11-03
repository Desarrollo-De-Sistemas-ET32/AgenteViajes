import { Test, TestingModule } from '@nestjs/testing';
import { DietaryRestrictionsController } from './dietary-restrictions.controller';

describe('DietaryRestrictionsController', () => {
  let controller: DietaryRestrictionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietaryRestrictionsController],
    }).compile();

    controller = module.get<DietaryRestrictionsController>(DietaryRestrictionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

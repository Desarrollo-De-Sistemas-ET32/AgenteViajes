import { Test, TestingModule } from '@nestjs/testing';
import { AccessibilityRequirementsController } from './accessibility-requirements.controller';

describe('AccessibilityRequirementsController', () => {
  let controller: AccessibilityRequirementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessibilityRequirementsController],
    }).compile();

    controller = module.get<AccessibilityRequirementsController>(AccessibilityRequirementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

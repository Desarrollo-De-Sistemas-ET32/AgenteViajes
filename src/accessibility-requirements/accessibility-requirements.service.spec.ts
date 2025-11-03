import { Test, TestingModule } from '@nestjs/testing';
import { AccessibilityRequirementsService } from './accessibility-requirements.service';

describe('AccessibilityRequirementsService', () => {
  let service: AccessibilityRequirementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessibilityRequirementsService],
    }).compile();

    service = module.get<AccessibilityRequirementsService>(AccessibilityRequirementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

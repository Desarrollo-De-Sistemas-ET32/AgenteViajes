import { Test, TestingModule } from '@nestjs/testing';
import { UserTravelInterestsService } from './user-travel-interests.service';

describe('UserTravelInterestsService', () => {
  let service: UserTravelInterestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTravelInterestsService],
    }).compile();

    service = module.get<UserTravelInterestsService>(UserTravelInterestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

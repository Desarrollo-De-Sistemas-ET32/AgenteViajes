import { Test, TestingModule } from '@nestjs/testing';
import { UserTravelInterestsController } from './user-travel-interests.controller';

describe('UserTravelInterestsController', () => {
  let controller: UserTravelInterestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTravelInterestsController],
    }).compile();

    controller = module.get<UserTravelInterestsController>(UserTravelInterestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

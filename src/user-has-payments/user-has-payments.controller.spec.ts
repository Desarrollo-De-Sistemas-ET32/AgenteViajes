import { Test, TestingModule } from '@nestjs/testing';
import { UserHasPaymentsController } from './user-has-payments.controller';

describe('UserHasPaymentsController', () => {
  let controller: UserHasPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasPaymentsController],
    }).compile();

    controller = module.get<UserHasPaymentsController>(UserHasPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

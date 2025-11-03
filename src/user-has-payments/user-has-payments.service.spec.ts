import { Test, TestingModule } from '@nestjs/testing';
import { UserHasPaymentsService } from './user-has-payments.service';

describe('UserHasPaymentsService', () => {
  let service: UserHasPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasPaymentsService],
    }).compile();

    service = module.get<UserHasPaymentsService>(UserHasPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

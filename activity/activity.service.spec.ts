import { Test, TestingModule } from '@nestjs/testing';
import { ActivityService } from './activity.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Activity } from '../entities/activity.entity';
import { Repository } from 'typeorm';

describe('ActivityService', () => {
  let service: ActivityService;
  let mockRepository: Partial<Repository<Activity>>;

  beforeEach(async () => {
    // Mock del Repositorio de Activity
    mockRepository = {
      // Añade aquí mocks de los métodos que uses en tu servicio
      // Por ejemplo: create, find, findOne, update, remove
      create: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivityService,
        {
          provide: getRepositoryToken(Activity),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ActivityService>(ActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


import { Test, TestingModule } from '@nestjs/testing';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { ThrottlerGuard } from '@nestjs/throttler';
import { INestApplication, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CreateActivityDto } from './dto/create-activity.dto';
import { Activity } from '../entities/activity.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

// Mock del servicio para no depender de la base de datos
const mockActivityService = {
  create: jest.fn(dto => {
    return Promise.resolve({ id: Date.now(), ...dto });
  }),
  // Mock otros métodos si son necesarios para las pruebas de GET, etc.
};

describe('ActivityController (Integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const mockAuthGuard = {
      canActivate: (context) => {
        const req = context.switchToHttp().getRequest();
        if (!req.headers.authorization) {
          // Comportamiento correcto: lanzar 401 si no hay token
          throw new UnauthorizedException('Missing authentication token');
        }
        if (req.headers.authorization === 'Bearer admin-token') {
          req.user = { userId: 1, roles: ['admin'] };
        } else {
          req.user = { userId: 2, roles: ['user'] };
        }
        return true;
      },
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ActivityController],
      providers: [
        ActivityService,
        {
          provide: getRepositoryToken(Activity),
          useValue: {
            create: jest.fn((dto) => ({...dto})),
            save: jest.fn((activity) => Promise.resolve({ id: Date.now(), ...activity })),
          },
        },
      ],
    })
      .overrideProvider(ActivityService)
      .useValue(mockActivityService)
      .overrideGuard(AuthGuard('jwt'))
      .useValue(mockAuthGuard)
      .overrideGuard(RolesGuard)
      .useClass(RolesGuard)
      .overrideGuard(ThrottlerGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
  });

  // --- PRUEBAS DE SEGURIDAD ---

  it('Debería rechazar el acceso a una ruta protegida sin token (401 Unauthorized)', () => {
    return request(app.getHttpServer())
      .post('/activity')
      .send({ activityName: 'Test', location: 'Test', cost: 100 })
      .expect(401);
  });
  
  it('Debería rechazar la creación (POST /activity) para un usuario sin rol de admin (403 Forbidden)', () => {
    const createDto: CreateActivityDto = { activityName: 'User Activity', location: 'Someplace', cost: 100 };
    return request(app.getHttpServer())
      .post('/activity')
      .set('Authorization', 'Bearer user-token')
      .send(createDto)
      .expect(403);
  });

  it('Debería permitir la creación (POST /activity) para un usuario con rol de admin (201 Created)', () => {
    const createDto: CreateActivityDto = { activityName: 'Admin Activity', location: 'Admin Zone', cost: 500 };
    mockActivityService.create.mockReturnValueOnce(Promise.resolve({ id: 1, ...createDto }));

    return request(app.getHttpServer())
      .post('/activity')
      .set('Authorization', 'Bearer admin-token')
      .send(createDto)
      .expect(201)
      .then(response => {
        expect(response.body).toEqual({
          id: expect.any(Number),
          ...createDto,
        });
      });
  });

  it('Debería rechazar la creación (POST /activity) con datos inválidos (400 Bad Request)', () => {
    const invalidDto = { activityName: 'Invalid Activity' };
    return request(app.getHttpServer())
      .post('/activity')
      .set('Authorization', 'Bearer admin-token')
      .send(invalidDto)
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});

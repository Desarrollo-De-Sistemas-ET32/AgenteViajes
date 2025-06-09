import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { checkJwt, checkScopes } from '../common/middleware/auth.middleware';

@Module({
  controllers: [AuthController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(checkJwt)
      .forRoutes('api/private', 'api/private-scoped');

    consumer
      .apply(checkScopes)
      .forRoutes('api/private-scoped');
  }
}

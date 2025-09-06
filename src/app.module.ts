import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FileModule } from './files-endpoint/file.module';
import { HotelModule } from './hotel/hotel.module';
import { FlightsModule } from './flights/flights.module';
import { TravelModule } from './travel/travel.module';
import { ActivityModule } from './activity/activity.module';
import { PaymentModule } from './payment/payment.module'; // Debe ser PaymentModule
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'amelieSQL',
      autoLoadEntities: true,
      synchronize: false,
    }),
    FileModule,
    HotelModule,
    FlightsModule,
    TravelModule,
    ActivityModule,
    PaymentModule, // Debe ser PaymentModule
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

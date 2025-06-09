import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel/hotel.entity';
import { Flights } from './flights/flights.entity';
import { Travel } from './travel/travel.entity';

import { HotelModule } from './hotel/hotel.module';
import { FlightsModule } from './flights/flights.module';
import { TravelModule } from './travel/travel.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mydb',
      entities: [Hotel, Flights, Travel, User],
      synchronize: false,
      logging: true, // esto habilita los logs de conexión y queries
    }),
    HotelModule,
    FlightsModule,
    TravelModule,
    UserModule,
  ],
})
export class AppModule {}

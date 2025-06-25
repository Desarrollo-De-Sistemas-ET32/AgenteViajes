import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel/hotel.entity';
import { Flights } from './flights/flights.entity';
import { Travel } from './travel/travel.entity';
import { User } from './user/user.entity';

import { HotelModule } from './hotel/hotel.module';
import { FlightsModule } from './flights/flights.module';
import { TravelModule } from './travel/travel.module';
import { UserModule } from './user/user.module';
import { FileModule } from './files-endpoint/file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'amelieSQL',
      entities: [Hotel, Flights, Travel, User],
      synchronize: false,
      logging: true,
    }),
    HotelModule,
    FlightsModule,
    TravelModule,
    UserModule,
    FileModule, // se incluye el módulo de archivos aquí
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

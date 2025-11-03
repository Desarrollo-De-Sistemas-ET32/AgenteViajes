import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HotelModule } from './hotel/hotel.module';
import { FlightModule } from './flights/flights.module';
import { TravelModule } from './travel/travel.module';
import { ActivityModule } from './activity/activity.module';
import { PaymentsModule } from './payment/payment.module';
import { NotificationModule } from './notification/notification.module';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';
import { FileModule } from './files-endpoint/file.module';
import { TravelHasHotelModule } from './travel-has-hotel/travel-has-hotel.module';
import { TravelHasFlightModule } from './travel-has-flight/travel-has-flight.module';
import { TravelHasActivityModule } from './travel-has-activity/travel-has-activity.module';
import { TravelCompanionModule } from './travel-companion/travel-companion.module';
import { FavoritesModule } from './favorite/favorite.module';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { UserHasPaymentsModule } from './user-has-payments/user-has-payments.module';
import { UserTravelInterestsModule } from './user-travel-interests/user-travel-interests.module';
import { DietaryRestrictionsModule } from './dietary-restrictions/dietary-restrictions.module';
import { AccessibilityRequirementsModule } from './accessibility-requirements/accessibility-requirements.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'amelieSQL',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UserModule,
    HotelModule,
    FlightModule,
    TravelModule,
    ActivityModule,
    PaymentsModule,
    NotificationModule,
    MessageModule,
    ChatModule,
    FileModule,
    TravelHasHotelModule,
    TravelHasFlightModule,
    TravelHasActivityModule,
    TravelCompanionModule,
    FavoritesModule,
    UserSettingsModule,
    UserHasPaymentsModule,
    UserTravelInterestsModule,
    DietaryRestrictionsModule,
    AccessibilityRequirementsModule,
    AuthModule,
  ],
})
export class AppModule {}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const hotel_module_1 = require("./hotel/hotel.module");
const flights_module_1 = require("./flights/flights.module");
const travel_module_1 = require("./travel/travel.module");
const activity_module_1 = require("./activity/activity.module");
const payment_module_1 = require("./payment/payment.module");
const notification_module_1 = require("./notification/notification.module");
const message_module_1 = require("./message/message.module");
const chat_module_1 = require("./chat/chat.module");
const file_module_1 = require("./files-endpoint/file.module");
const travel_has_hotel_module_1 = require("./travel-has-hotel/travel-has-hotel.module");
const travel_has_flight_module_1 = require("./travel-has-flight/travel-has-flight.module");
const travel_has_activity_module_1 = require("./travel-has-activity/travel-has-activity.module");
const travel_companion_module_1 = require("./travel-companion/travel-companion.module");
const favorite_module_1 = require("./favorite/favorite.module");
const user_settings_module_1 = require("./user-settings/user-settings.module");
const user_has_payments_module_1 = require("./user-has-payments/user-has-payments.module");
const user_travel_interests_module_1 = require("./user-travel-interests/user-travel-interests.module");
const dietary_restrictions_module_1 = require("./dietary-restrictions/dietary-restrictions.module");
const accessibility_requirements_module_1 = require("./accessibility-requirements/accessibility-requirements.module");
const auth_module_1 = require("./auth/auth.module");
const city_module_1 = require("./city/city.module");
const review_module_1 = require("./review/review.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3307,
                username: 'usuario',
                password: '123',
                database: 'AmelieSQL',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            user_module_1.UserModule,
            hotel_module_1.HotelModule,
            flights_module_1.FlightModule,
            travel_module_1.TravelModule,
            activity_module_1.ActivityModule,
            payment_module_1.PaymentsModule,
            notification_module_1.NotificationModule,
            message_module_1.MessageModule,
            chat_module_1.ChatModule,
            file_module_1.FileModule,
            travel_has_hotel_module_1.TravelHasHotelModule,
            travel_has_flight_module_1.TravelHasFlightModule,
            travel_has_activity_module_1.TravelHasActivityModule,
            travel_companion_module_1.TravelCompanionModule,
            favorite_module_1.FavoritesModule,
            user_settings_module_1.UserSettingsModule,
            user_has_payments_module_1.UserHasPaymentsModule,
            user_travel_interests_module_1.UserTravelInterestsModule,
            dietary_restrictions_module_1.DietaryRestrictionsModule,
            accessibility_requirements_module_1.AccessibilityRequirementsModule,
            auth_module_1.AuthModule,
            city_module_1.CityModule,
            review_module_1.ReviewModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
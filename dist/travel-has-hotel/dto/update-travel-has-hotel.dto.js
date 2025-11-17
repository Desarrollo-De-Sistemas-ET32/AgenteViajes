"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTravelHasHotelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_travel_has_hotel_dto_1 = require("./create-travel-has-hotel.dto");
const mapped_types_2 = require("@nestjs/mapped-types");
class UpdateTravelHasHotelDto extends (0, mapped_types_1.PartialType)((0, mapped_types_2.OmitType)(create_travel_has_hotel_dto_1.CreateTravelHasHotelDto, ['travelIdTravel', 'hotelIdHotel'])) {
}
exports.UpdateTravelHasHotelDto = UpdateTravelHasHotelDto;
//# sourceMappingURL=update-travel-has-hotel.dto.js.map
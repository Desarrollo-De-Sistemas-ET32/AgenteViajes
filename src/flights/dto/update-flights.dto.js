"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_flights_dto_1 = require("./create-flights.dto");
class UpdateFlightDto extends (0, mapped_types_1.PartialType)(create_flights_dto_1.CreateFlightDto) {
}
exports.UpdateFlightDto = UpdateFlightDto;
//# sourceMappingURL=update-flights.dto.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDietaryRestrictionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dietary_restrictions_dto_1 = require("./create-dietary-restrictions.dto");
class UpdateDietaryRestrictionDto extends (0, mapped_types_1.PartialType)(create_dietary_restrictions_dto_1.CreateDietaryRestrictionDto) {
}
exports.UpdateDietaryRestrictionDto = UpdateDietaryRestrictionDto;
//# sourceMappingURL=update-dietary-restrictions.dto.js.map
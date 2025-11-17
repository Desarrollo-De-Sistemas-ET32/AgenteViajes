"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTravelHasActivityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_travel_has_activity_dto_1 = require("./create-travel-has-activity.dto");
class UpdateTravelHasActivityDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_travel_has_activity_dto_1.CreateTravelHasActivityDto, ['travelId', 'activityId'])) {
}
exports.UpdateTravelHasActivityDto = UpdateTravelHasActivityDto;
//# sourceMappingURL=update-travel-has-activity.dto.js.map
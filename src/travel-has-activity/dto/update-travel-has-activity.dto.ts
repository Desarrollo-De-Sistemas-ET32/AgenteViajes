import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateTravelHasActivityDto } from './create-travel-has-activity.dto';

export class UpdateTravelHasActivityDto extends PartialType(
  OmitType(CreateTravelHasActivityDto, ['travelId', 'activityId'] as const),
) {}
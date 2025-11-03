import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTravelInterestDto } from './create-user-travel-interests.dto';

export class UpdateUserTravelInterestDto extends PartialType(CreateUserTravelInterestDto) {}
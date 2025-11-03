import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSettingDto } from './create-user-settings.dto';

export class UpdateUserSettingDto extends PartialType(CreateUserSettingDto) {}
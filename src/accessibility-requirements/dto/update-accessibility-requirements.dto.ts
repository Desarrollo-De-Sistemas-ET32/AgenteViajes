import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessibilityRequirementDto } from './create-accessibility-requirements.dto';

export class UpdateAccessibilityRequirementDto extends PartialType(CreateAccessibilityRequirementDto) {}
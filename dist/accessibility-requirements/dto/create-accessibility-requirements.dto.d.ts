import { RequirementType } from '../../entities/accessibility-requirements.entity';
export declare class CreateAccessibilityRequirementDto {
    idUser: number;
    requirementType: RequirementType;
    details?: string;
}

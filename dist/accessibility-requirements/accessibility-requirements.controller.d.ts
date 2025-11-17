import { AccessibilityRequirementsService } from './accessibility-requirements.service';
import { CreateAccessibilityRequirementDto } from './dto/create-accessibility-requirements.dto';
import { UpdateAccessibilityRequirementDto } from './dto/update-accessibility-requirements.dto';
import { RequirementType } from '../entities/accessibility-requirements.entity';
export declare class AccessibilityRequirementsController {
    private readonly accessibilityRequirementsService;
    constructor(accessibilityRequirementsService: AccessibilityRequirementsService);
    create(createAccessibilityRequirementDto: CreateAccessibilityRequirementDto): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement>;
    findAll(): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement[]>;
    findByUser(userId: number): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    findByUserAndType(userId: number, requirementType: RequirementType): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement[]>;
    hasRequirement(userId: number, requirementType: RequirementType): Promise<{
        hasRequirement: boolean;
    }>;
    findByType(requirementType: RequirementType): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement[]>;
    countByType(requirementType: RequirementType): Promise<{
        count: number;
    }>;
    findOne(id: number): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement>;
    update(id: number, updateAccessibilityRequirementDto: UpdateAccessibilityRequirementDto): Promise<import("../entities/accessibility-requirements.entity").AccessibilityRequirement>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
}

import { Repository } from 'typeorm';
import { AccessibilityRequirement, RequirementType } from '../entities/accessibility-requirements.entity';
import { CreateAccessibilityRequirementDto } from './dto/create-accessibility-requirements.dto';
import { UpdateAccessibilityRequirementDto } from './dto/update-accessibility-requirements.dto';
export declare class AccessibilityRequirementsService {
    private readonly accessibilityRequirementRepository;
    constructor(accessibilityRequirementRepository: Repository<AccessibilityRequirement>);
    create(createAccessibilityRequirementDto: CreateAccessibilityRequirementDto): Promise<AccessibilityRequirement>;
    findAll(): Promise<AccessibilityRequirement[]>;
    findOne(id: number): Promise<AccessibilityRequirement>;
    findByUser(userId: number): Promise<AccessibilityRequirement[]>;
    findByType(requirementType: RequirementType): Promise<AccessibilityRequirement[]>;
    findByUserAndType(userId: number, requirementType: RequirementType): Promise<AccessibilityRequirement[]>;
    update(id: number, updateAccessibilityRequirementDto: UpdateAccessibilityRequirementDto): Promise<AccessibilityRequirement>;
    remove(id: number): Promise<void>;
    removeAllByUser(userId: number): Promise<void>;
    countByUser(userId: number): Promise<number>;
    countByType(requirementType: RequirementType): Promise<number>;
    hasRequirement(userId: number, requirementType: RequirementType): Promise<boolean>;
}

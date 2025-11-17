import { User } from './user.entity';
export declare enum RequirementType {
    WHEELCHAIR = "Acceso para silla de ruedas",
    VISUAL = "Asistencia visual",
    HEARING = "Asistencia auditiva"
}
export declare class AccessibilityRequirement {
    idAccessibility: number;
    idUser: number;
    requirementType: RequirementType;
    details: string;
    user: User;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessibilityRequirement, RequirementType } from '../entities/accessibility-requirements.entity';
import { CreateAccessibilityRequirementDto } from './dto/create-accessibility-requirements.dto';
import { UpdateAccessibilityRequirementDto } from './dto/update-accessibility-requirements.dto';

@Injectable()
export class AccessibilityRequirementsService {
  constructor(
    @InjectRepository(AccessibilityRequirement)
    private readonly accessibilityRequirementRepository: Repository<AccessibilityRequirement>,
  ) {}

  async create(createAccessibilityRequirementDto: CreateAccessibilityRequirementDto): Promise<AccessibilityRequirement> {
    const requirement = this.accessibilityRequirementRepository.create(createAccessibilityRequirementDto);
    return await this.accessibilityRequirementRepository.save(requirement);
  }

  async findAll(): Promise<AccessibilityRequirement[]> {
    return await this.accessibilityRequirementRepository.find({
      relations: ['user'],
      order: { idAccessibility: 'DESC' },
    });
  }

  async findOne(id: number): Promise<AccessibilityRequirement> {
    const requirement = await this.accessibilityRequirementRepository.findOne({
      where: { idAccessibility: id },
      relations: ['user'],
    });

    if (!requirement) {
      throw new NotFoundException(`Accessibility Requirement with ID ${id} not found`);
    }

    return requirement;
  }

  async findByUser(userId: number): Promise<AccessibilityRequirement[]> {
    return await this.accessibilityRequirementRepository.find({
      where: { idUser: userId },
      order: { idAccessibility: 'DESC' },
    });
  }

  async findByType(requirementType: RequirementType): Promise<AccessibilityRequirement[]> {
    return await this.accessibilityRequirementRepository.find({
      where: { requirementType },
      relations: ['user'],
      order: { idAccessibility: 'DESC' },
    });
  }

  async findByUserAndType(userId: number, requirementType: RequirementType): Promise<AccessibilityRequirement[]> {
    return await this.accessibilityRequirementRepository.find({
      where: { idUser: userId, requirementType },
      order: { idAccessibility: 'DESC' },
    });
  }

  async update(id: number, updateAccessibilityRequirementDto: UpdateAccessibilityRequirementDto): Promise<AccessibilityRequirement> {
    const requirement = await this.findOne(id);
    
    Object.assign(requirement, updateAccessibilityRequirementDto);
    return await this.accessibilityRequirementRepository.save(requirement);
  }

  async remove(id: number): Promise<void> {
    const requirement = await this.findOne(id);
    await this.accessibilityRequirementRepository.remove(requirement);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const requirements = await this.findByUser(userId);
    if (requirements.length > 0) {
      await this.accessibilityRequirementRepository.remove(requirements);
    }
  }

  async countByUser(userId: number): Promise<number> {
    return await this.accessibilityRequirementRepository.count({
      where: { idUser: userId },
    });
  }

  async countByType(requirementType: RequirementType): Promise<number> {
    return await this.accessibilityRequirementRepository.count({
      where: { requirementType },
    });
  }

  async hasRequirement(userId: number, requirementType: RequirementType): Promise<boolean> {
    const count = await this.accessibilityRequirementRepository.count({
      where: { idUser: userId, requirementType },
    });
    return count > 0;
  }
}
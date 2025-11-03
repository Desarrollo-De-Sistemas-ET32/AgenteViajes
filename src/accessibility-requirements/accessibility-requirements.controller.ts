import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { AccessibilityRequirementsService } from './accessibility-requirements.service';
import { CreateAccessibilityRequirementDto } from './dto/create-accessibility-requirements.dto';
import { UpdateAccessibilityRequirementDto } from './dto/update-accessibility-requirements.dto';
import { RequirementType } from '../entities/accessibility-requirements.entity';

@Controller('accessibility-requirements')
export class AccessibilityRequirementsController {
  constructor(private readonly accessibilityRequirementsService: AccessibilityRequirementsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createAccessibilityRequirementDto: CreateAccessibilityRequirementDto) {
    return this.accessibilityRequirementsService.create(createAccessibilityRequirementDto);
  }

  @Get()
  findAll() {
    return this.accessibilityRequirementsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.accessibilityRequirementsService.findByUser(userId);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.accessibilityRequirementsService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/type/:type')
  findByUserAndType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('type') requirementType: RequirementType,
  ) {
    return this.accessibilityRequirementsService.findByUserAndType(userId, requirementType);
  }

  @Get('user/:userId/has/:type')
  async hasRequirement(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('type') requirementType: RequirementType,
  ) {
    const hasRequirement = await this.accessibilityRequirementsService.hasRequirement(userId, requirementType);
    return { hasRequirement };
  }

  @Get('type/:type')
  findByType(@Param('type') requirementType: RequirementType) {
    return this.accessibilityRequirementsService.findByType(requirementType);
  }

  @Get('type/:type/count')
  async countByType(@Param('type') requirementType: RequirementType) {
    const count = await this.accessibilityRequirementsService.countByType(requirementType);
    return { count };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accessibilityRequirementsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAccessibilityRequirementDto: UpdateAccessibilityRequirementDto,
  ) {
    return this.accessibilityRequirementsService.update(id, updateAccessibilityRequirementDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.accessibilityRequirementsService.remove(id);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.accessibilityRequirementsService.removeAllByUser(userId);
  }
}
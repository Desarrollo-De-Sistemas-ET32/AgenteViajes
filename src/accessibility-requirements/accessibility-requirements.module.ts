import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityRequirementsService } from './accessibility-requirements.service';
import { AccessibilityRequirementsController } from './accessibility-requirements.controller';
import { AccessibilityRequirement } from '../entities/accessibility-requirements.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessibilityRequirement])],
  controllers: [AccessibilityRequirementsController],
  providers: [AccessibilityRequirementsService],
  exports: [AccessibilityRequirementsService],
})
export class AccessibilityRequirementsModule {}
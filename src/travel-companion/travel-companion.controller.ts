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
  Query,
} from '@nestjs/common';
import { TravelCompanionService } from './travel-companion.service';
import { CreateTravelCompanionDto } from './dto/create-travel-companion.dto';
import { UpdateTravelCompanionDto } from './dto/update-travel-companion.dto';

@Controller('travel-companion')
export class TravelCompanionController {
  constructor(private readonly travelCompanionService: TravelCompanionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTravelCompanionDto: CreateTravelCompanionDto) {
    return this.travelCompanionService.create(createTravelCompanionDto);
  }

  @Get()
  findAll() {
    return this.travelCompanionService.findAll();
  }

  @Get('travel/:travelId')
  findByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelCompanionService.findByTravel(travelId);
  }

  @Get('travel/:travelId/count')
  async countByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    const count = await this.travelCompanionService.countByTravel(travelId);
    return { count };
  }

  @Get('travel/:travelId/has-email')
  async hasEmail(
    @Param('travelId', ParseIntPipe) travelId: number,
    @Query('email') email: string,
  ) {
    const hasEmail = await this.travelCompanionService.hasEmail(travelId, email);
    return { hasEmail };
  }

  @Get('relationship/:relationship')
  findByRelationship(@Param('relationship') relationship: string) {
    return this.travelCompanionService.findByRelationship(relationship);
  }

  @Get('relationship/:relationship/count')
  async countByRelationship(@Param('relationship') relationship: string) {
    const count = await this.travelCompanionService.countByRelationship(relationship);
    return { count };
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.travelCompanionService.findByEmail(email);
  }

  @Get('search')
  searchByName(@Query('name') name: string) {
    return this.travelCompanionService.searchByName(name);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelCompanionService.findOne(id);
  }

  @Get(':id/full-name')
  async getFullName(@Param('id', ParseIntPipe) id: number) {
    const fullName = await this.travelCompanionService.getFullName(id);
    return { fullName };
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTravelCompanionDto: UpdateTravelCompanionDto,
  ) {
    return this.travelCompanionService.update(id, updateTravelCompanionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.travelCompanionService.remove(id);
  }

  @Delete('travel/:travelId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByTravel(@Param('travelId', ParseIntPipe) travelId: number) {
    return this.travelCompanionService.removeAllByTravel(travelId);
  }
}
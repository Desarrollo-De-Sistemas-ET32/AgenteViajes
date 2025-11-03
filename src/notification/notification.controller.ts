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
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationType, RelatedEntityType } from '../entities/notification.entity';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.notificationService.findByUser(userId);
  }

  @Get('user/:userId/unread')
  findUnreadByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.notificationService.findUnreadByUser(userId);
  }

  @Get('user/:userId/unread/count')
  async countUnreadByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.notificationService.countUnreadByUser(userId);
    return { count };
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.notificationService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/recent')
  getRecentByUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.notificationService.getRecentByUser(userId, limit);
  }

  @Get('user/:userId/type/:type')
  findByType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('type') type: NotificationType,
  ) {
    return this.notificationService.findByType(userId, type);
  }

  @Get('user/:userId/type/:type/count')
  async countByType(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('type') type: NotificationType,
  ) {
    const count = await this.notificationService.countByType(userId, type);
    return { count };
  }

  @Get('user/:userId/entity/:entityType/:entityId')
  findByRelatedEntity(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('entityType') entityType: RelatedEntityType,
    @Param('entityId', ParseIntPipe) entityId: number,
  ) {
    return this.notificationService.findByRelatedEntity(userId, entityType, entityId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Patch(':id/read')
  markAsRead(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.markAsRead(id);
  }

  @Patch('user/:userId/read-all')
  @HttpCode(HttpStatus.NO_CONTENT)
  markAllAsReadByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.notificationService.markAllAsReadByUser(userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.remove(id);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.notificationService.removeAllByUser(userId);
  }
}
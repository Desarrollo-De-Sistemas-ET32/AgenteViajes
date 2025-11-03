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
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ChatStatus } from '../entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.chatService.findByUser(userId);
  }

  @Get('user/:userId/active')
  findActiveByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.chatService.findActiveByUser(userId);
  }

  @Get('user/:userId/recent')
  findRecentByUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.chatService.findRecentByUser(userId, limit);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.chatService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/active/count')
  async countActiveByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.chatService.countActiveByUser(userId);
    return { count };
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: ChatStatus) {
    return this.chatService.findByStatus(status);
  }

  @Get('status/:status/count')
  async countByStatus(@Param('status') status: ChatStatus) {
    const count = await this.chatService.countByStatus(status);
    return { count };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.chatService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateChatDto: UpdateChatDto,
  ) {
    return this.chatService.update(id, updateChatDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: ChatStatus },
  ) {
    return this.chatService.updateStatus(id, body.status);
  }

  @Patch(':id/archive')
  archiveChat(@Param('id', ParseIntPipe) id: number) {
    return this.chatService.archiveChat(id);
  }

  @Patch(':id/close')
  closeChat(@Param('id', ParseIntPipe) id: number) {
    return this.chatService.closeChat(id);
  }

  @Patch(':id/reopen')
  reopenChat(@Param('id', ParseIntPipe) id: number) {
    return this.chatService.reopenChat(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.chatService.remove(id);
  }
}
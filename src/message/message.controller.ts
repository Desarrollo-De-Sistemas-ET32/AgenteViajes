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
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageSender, MessageType } from '../entities/message.entity';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get('chat/:chatId')
  findByChat(@Param('chatId', ParseIntPipe) chatId: number) {
    return this.messageService.findByChat(chatId);
  }

  @Get('chat/:chatId/unread')
  findUnreadByChat(@Param('chatId', ParseIntPipe) chatId: number) {
    return this.messageService.findUnreadByChat(chatId);
  }

  @Get('chat/:chatId/unread/count')
  async countUnreadInChat(@Param('chatId', ParseIntPipe) chatId: number) {
    const count = await this.messageService.countUnreadInChat(chatId);
    return { count };
  }

  @Get('chat/:chatId/count')
  async countByChat(@Param('chatId', ParseIntPipe) chatId: number) {
    const count = await this.messageService.countByChat(chatId);
    return { count };
  }

  @Get('chat/:chatId/recent')
  findRecentByChat(
    @Param('chatId', ParseIntPipe) chatId: number,
    @Query('limit', ParseIntPipe) limit: number = 50,
  ) {
    return this.messageService.findRecentByChat(chatId, limit);
  }

  @Get('chat/:chatId/last')
  getLastMessageByChat(@Param('chatId', ParseIntPipe) chatId: number) {
    return this.messageService.getLastMessageByChat(chatId);
  }

  @Get('chat/:chatId/sender/:sender')
  findBySender(
    @Param('chatId', ParseIntPipe) chatId: number,
    @Param('sender') sender: MessageSender,
  ) {
    return this.messageService.findBySender(chatId, sender);
  }

  @Get('chat/:chatId/sender/:sender/count')
  async countBySender(
    @Param('chatId', ParseIntPipe) chatId: number,
    @Param('sender') sender: MessageSender,
  ) {
    const count = await this.messageService.countBySender(chatId, sender);
    return { count };
  }

  @Get('chat/:chatId/type/:type')
  findByType(
    @Param('chatId', ParseIntPipe) chatId: number,
    @Param('type') messageType: MessageType,
  ) {
    return this.messageService.findByType(chatId, messageType);
  }

  @Get('chat/:chatId/type/:type/count')
  async countByType(
    @Param('chatId', ParseIntPipe) chatId: number,
    @Param('type') messageType: MessageType,
  ) {
    const count = await this.messageService.countByType(chatId, messageType);
    return { count };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    return this.messageService.update(id, updateMessageDto);
  }

  @Patch(':id/read')
  markAsRead(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.markAsRead(id);
  }

  @Patch('chat/:chatId/read-all')
  @HttpCode(HttpStatus.NO_CONTENT)
  markAllAsReadInChat(@Param('chatId', ParseIntPipe) chatId: number) {
    return this.messageService.markAllAsReadInChat(chatId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.remove(id);
  }

  @Delete('chat/:chatId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByChat(@Param('chatId', ParseIntPipe) chatId: number) {
    return this.messageService.removeAllByChat(chatId);
  }
}
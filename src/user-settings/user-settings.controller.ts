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
import { UserSettingsService } from './user-settings.service';
import { CreateUserSettingDto } from './dto/create-user-settings.dto';
import { UpdateUserSettingDto } from './dto/update-user-settings.dto';

@Controller('user-settings')
export class UserSettingsController {
  constructor(private readonly userSettingsService: UserSettingsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserSettingDto: CreateUserSettingDto) {
    return this.userSettingsService.create(createUserSettingDto);
  }

  @Get()
  findAll() {
    return this.userSettingsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userSettingsService.findByUser(userId);
  }

  @Get('user/:userId/all-settings')
  getAllSettingsByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userSettingsService.getAllSettingsByUser(userId);
  }

  @Get('user/:userId/count')
  async countByUser(@Param('userId', ParseIntPipe) userId: number) {
    const count = await this.userSettingsService.countByUser(userId);
    return { count };
  }

  @Get('user/:userId/key/:settingKey')
  findByUserAndKey(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('settingKey') settingKey: string,
  ) {
    return this.userSettingsService.findByUserAndKey(userId, settingKey);
  }

  @Get('user/:userId/value/:settingKey')
  async getSettingValue(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('settingKey') settingKey: string,
  ) {
    const value = await this.userSettingsService.getSettingValue(userId, settingKey);
    return { value };
  }

  @Get('user/:userId/has/:settingKey')
  async hasSetting(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('settingKey') settingKey: string,
  ) {
    const hasSetting = await this.userSettingsService.hasSetting(userId, settingKey);
    return { hasSetting };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userSettingsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserSettingDto: UpdateUserSettingDto,
  ) {
    return this.userSettingsService.update(id, updateUserSettingDto);
  }

  @Patch('user/:userId/key/:settingKey')
  updateByUserAndKey(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('settingKey') settingKey: string,
    @Body() body: { settingValue: string },
  ) {
    return this.userSettingsService.updateByUserAndKey(
      userId,
      settingKey,
      body.settingValue,
    );
  }

  @Post('user/:userId/upsert')
  upsert(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() body: { settingKey: string; settingValue: string },
  ) {
    return this.userSettingsService.upsert(userId, body.settingKey, body.settingValue);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userSettingsService.remove(id);
  }

  @Delete('user/:userId/key/:settingKey')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeByUserAndKey(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('settingKey') settingKey: string,
  ) {
    return this.userSettingsService.removeByUserAndKey(userId, settingKey);
  }

  @Delete('user/:userId/all')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeAllByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userSettingsService.removeAllByUser(userId);
  }
}
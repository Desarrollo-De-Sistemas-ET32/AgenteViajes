import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSetting } from '../entities/user-settings.entity';
import { CreateUserSettingDto } from './dto/create-user-settings.dto';
import { UpdateUserSettingDto } from './dto/update-user-settings.dto';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSetting)
    private readonly userSettingRepository: Repository<UserSetting>,
  ) {}

  async create(createUserSettingDto: CreateUserSettingDto): Promise<UserSetting> {
    // Verificar si la configuración ya existe
    const existing = await this.userSettingRepository.findOne({
      where: {
        idUser: createUserSettingDto.idUser,
        settingKey: createUserSettingDto.settingKey,
      },
    });

    if (existing) {
      throw new ConflictException(
        `Setting ${createUserSettingDto.settingKey} already exists for this user`,
      );
    }

    const userSetting = this.userSettingRepository.create(createUserSettingDto);
    return await this.userSettingRepository.save(userSetting);
  }

  async findAll(): Promise<UserSetting[]> {
    return await this.userSettingRepository.find({
      relations: ['user'],
      order: { updatedAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<UserSetting> {
    const userSetting = await this.userSettingRepository.findOne({
      where: { idSetting: id },
      relations: ['user'],
    });

    if (!userSetting) {
      throw new NotFoundException(`User Setting with ID ${id} not found`);
    }

    return userSetting;
  }

  async findByUser(userId: number): Promise<UserSetting[]> {
    return await this.userSettingRepository.find({
      where: { idUser: userId },
      order: { updatedAt: 'DESC' },
    });
  }

  async findByUserAndKey(userId: number, settingKey: string): Promise<UserSetting> {
    const userSetting = await this.userSettingRepository.findOne({
      where: { idUser: userId, settingKey },
    });

    if (!userSetting) {
      throw new NotFoundException(
        `Setting ${settingKey} not found for user ${userId}`,
      );
    }

    return userSetting;
  }

  async getSettingValue(userId: number, settingKey: string): Promise<string | null> {
    const userSetting = await this.userSettingRepository.findOne({
      where: { idUser: userId, settingKey },
    });

    return userSetting?.settingValue || null;
  }

  async getAllSettingsByUser(userId: number): Promise<Record<string, string>> {
    const settings = await this.findByUser(userId);
    const result: Record<string, string> = {};

    settings.forEach((setting) => {
      result[setting.settingKey] = setting.settingValue;
    });

    return result;
  }

  async update(
    id: number,
    updateUserSettingDto: UpdateUserSettingDto,
  ): Promise<UserSetting> {
    const userSetting = await this.findOne(id);

    Object.assign(userSetting, updateUserSettingDto);
    return await this.userSettingRepository.save(userSetting);
  }

  async updateByUserAndKey(
    userId: number,
    settingKey: string,
    settingValue: string,
  ): Promise<UserSetting> {
    const userSetting = await this.findByUserAndKey(userId, settingKey);
    userSetting.settingValue = settingValue;
    return await this.userSettingRepository.save(userSetting);
  }

  async upsert(userId: number, settingKey: string, settingValue: string): Promise<UserSetting> {
    const existing = await this.userSettingRepository.findOne({
      where: { idUser: userId, settingKey },
    });

    if (existing) {
      existing.settingValue = settingValue;
      return await this.userSettingRepository.save(existing);
    }

    const newSetting = this.userSettingRepository.create({
      idUser: userId,
      settingKey,
      settingValue,
    });

    return await this.userSettingRepository.save(newSetting);
  }

  async remove(id: number): Promise<void> {
    const userSetting = await this.findOne(id);
    await this.userSettingRepository.remove(userSetting);
  }

  async removeByUserAndKey(userId: number, settingKey: string): Promise<void> {
    const userSetting = await this.findByUserAndKey(userId, settingKey);
    await this.userSettingRepository.remove(userSetting);
  }

  async removeAllByUser(userId: number): Promise<void> {
    const settings = await this.findByUser(userId);
    if (settings.length > 0) {
      await this.userSettingRepository.remove(settings);
    }
  }

  async countByUser(userId: number): Promise<number> {
    return await this.userSettingRepository.count({
      where: { idUser: userId },
    });
  }

  async hasSetting(userId: number, settingKey: string): Promise<boolean> {
    const count = await this.userSettingRepository.count({
      where: { idUser: userId, settingKey },
    });
    return count > 0;
  }
}
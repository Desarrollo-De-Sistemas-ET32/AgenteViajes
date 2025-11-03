import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite, EntityType } from '../entities/favorite.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    const existing = await this.favoriteRepository.findOne({
      where: {
        idUser: createFavoriteDto.idUser,
        entityType: createFavoriteDto.entityType,
        entityId: createFavoriteDto.entityId,
      },
    });

    if (existing) {
      throw new ConflictException('This item is already in favorites');
    }

    const favorite = this.favoriteRepository.create(createFavoriteDto);
    return await this.favoriteRepository.save(favorite);
  }

  async findAll(): Promise<Favorite[]> {
    return await this.favoriteRepository.find({
      relations: ['user'],
      order: { addedAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Favorite> {
    const favorite = await this.favoriteRepository.findOne({
      where: { idFavorite: id },
      relations: ['user'],
    });

    if (!favorite) {
      throw new NotFoundException(`Favorite with ID ${id} not found`);
    }

    return favorite;
  }

  async findByUser(userId: number): Promise<Favorite[]> {
    return await this.favoriteRepository.find({
      where: { idUser: userId },
      order: { addedAt: 'DESC' },
    });
  }

  async findByUserAndType(userId: number, entityType: EntityType): Promise<Favorite[]> {
    return await this.favoriteRepository.find({
      where: { idUser: userId, entityType },
      order: { addedAt: 'DESC' },
    });
  }

  async update(id: number, updateFavoriteDto: UpdateFavoriteDto): Promise<Favorite> {
    const favorite = await this.findOne(id);
    
    Object.assign(favorite, updateFavoriteDto);
    return await this.favoriteRepository.save(favorite);
  }

  async remove(id: number): Promise<void> {
    const favorite = await this.findOne(id);
    await this.favoriteRepository.remove(favorite);
  }

  async removeByUserAndEntity(userId: number, entityType: EntityType, entityId: number): Promise<void> {
    const favorite = await this.favoriteRepository.findOne({
      where: { idUser: userId, entityType, entityId },
    });

    if (!favorite) {
      throw new NotFoundException('Favorite not found');
    }

    await this.favoriteRepository.remove(favorite);
  }

  async isFavorite(userId: number, entityType: EntityType, entityId: number): Promise<boolean> {
    const count = await this.favoriteRepository.count({
      where: { idUser: userId, entityType, entityId },
    });
    return count > 0;
  }

  async countByUser(userId: number): Promise<number> {
    return await this.favoriteRepository.count({
      where: { idUser: userId },
    });
  }

  async countByType(entityType: EntityType): Promise<number> {
    return await this.favoriteRepository.count({
      where: { entityType },
    });
  }
}
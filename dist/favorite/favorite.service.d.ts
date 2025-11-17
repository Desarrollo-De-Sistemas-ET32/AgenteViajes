import { Repository } from 'typeorm';
import { Favorite, EntityType } from '../entities/favorite.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
export declare class FavoritesService {
    private readonly favoriteRepository;
    constructor(favoriteRepository: Repository<Favorite>);
    create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite>;
    findAll(): Promise<Favorite[]>;
    findOne(id: number): Promise<Favorite>;
    findByUser(userId: number): Promise<Favorite[]>;
    findByUserAndType(userId: number, entityType: EntityType): Promise<Favorite[]>;
    update(id: number, updateFavoriteDto: UpdateFavoriteDto): Promise<Favorite>;
    remove(id: number): Promise<void>;
    removeByUserAndEntity(userId: number, entityType: EntityType, entityId: number): Promise<void>;
    isFavorite(userId: number, entityType: EntityType, entityId: number): Promise<boolean>;
    countByUser(userId: number): Promise<number>;
    countByType(entityType: EntityType): Promise<number>;
}

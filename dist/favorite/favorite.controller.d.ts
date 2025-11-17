import { FavoritesService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { EntityType } from '../entities/favorite.entity';
export declare class FavoritesController {
    private readonly favoritesService;
    constructor(favoritesService: FavoritesService);
    create(createFavoriteDto: CreateFavoriteDto): Promise<import("../entities/favorite.entity").Favorite>;
    findAll(): Promise<import("../entities/favorite.entity").Favorite[]>;
    findByUser(userId: number): Promise<import("../entities/favorite.entity").Favorite[]>;
    countByUser(userId: number): Promise<{
        count: number;
    }>;
    findByUserAndType(userId: number, entityType: EntityType): Promise<import("../entities/favorite.entity").Favorite[]>;
    countByType(entityType: EntityType): Promise<{
        count: number;
    }>;
    checkFavorite(userId: number, entityType: EntityType, entityId: number): Promise<{
        isFavorite: boolean;
    }>;
    findOne(id: number): Promise<import("../entities/favorite.entity").Favorite>;
    update(id: number, updateFavoriteDto: UpdateFavoriteDto): Promise<import("../entities/favorite.entity").Favorite>;
    remove(id: number): Promise<void>;
    removeByUserAndEntity(userId: number, entityType: EntityType, entityId: number): Promise<void>;
}

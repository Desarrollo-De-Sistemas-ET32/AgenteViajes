import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorites.dto';
import { UpdateFavoriteDto } from './dto/update-favorites.dto';
import { EntityType } from '../entities/favorite.entity';
export declare class FavoritesController {
    private readonly favoritesService;
    constructor(favoritesService: FavoritesService);
    create(createFavoriteDto: CreateFavoriteDto): Promise<import("../entities/favorite.entity").Favorite>;
    findAll(): Promise<import("../entities/favorite.entity").Favorite[]>;
    findByUser(userId: number): Promise<import("../entities/favorite.entity").Favorite[]>;
    findByUserAndType(userId: number, entityType: EntityType): Promise<import("../entities/favorite.entity").Favorite[]>;
    checkFavorite(userId: number, entityType: EntityType, entityId: number): Promise<{
        isFavorite: boolean;
    }>;
    findOne(id: number): Promise<import("../entities/favorite.entity").Favorite>;
    update(id: number, updateFavoriteDto: UpdateFavoriteDto): Promise<import("../entities/favorite.entity").Favorite>;
    remove(id: number): Promise<void>;
    removeByUserAndEntity(userId: number, entityType: EntityType, entityId: number): Promise<void>;
}

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    findAll(): Promise<import("../entities/user.entity").User[]>;
    countUsers(): Promise<number>;
    searchByName(searchTerm: string): Promise<import("../entities/user.entity").User[]>;
    findByMembership(membership: number): Promise<import("../entities/user.entity").User[]>;
    countByMembership(membership: number): Promise<number>;
    findByEmail(email: string): Promise<import("../entities/user.entity").User>;
    findOne(id: number): Promise<import("../entities/user.entity").User>;
    findWithRelations(id: number): Promise<import("../entities/user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    updateMembership(id: number, membership: number): Promise<import("../entities/user.entity").User>;
    updateProfileImage(id: number, imagePath: string): Promise<import("../entities/user.entity").User>;
    remove(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}

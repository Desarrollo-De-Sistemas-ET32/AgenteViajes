import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    findWithRelations(id: number): Promise<User>;
    findByMembership(membership: number): Promise<User[]>;
    searchByName(searchTerm: string): Promise<User[]>;
    countUsers(): Promise<number>;
    countByMembership(membership: number): Promise<number>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    updateMembership(id: number, membership: number): Promise<User>;
    updateProfileImage(id: number, imagePath: string): Promise<User>;
    remove(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}

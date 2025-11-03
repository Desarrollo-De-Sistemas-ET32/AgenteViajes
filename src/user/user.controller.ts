import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('count')
  countUsers() {
    return this.userService.countUsers();
  }

  @Get('search')
  searchByName(@Query('term') searchTerm: string) {
    return this.userService.searchByName(searchTerm);
  }

  @Get('membership/:membership')
  findByMembership(@Param('membership', ParseIntPipe) membership: number) {
    return this.userService.findByMembership(membership);
  }

  @Get('membership/:membership/count')
  countByMembership(@Param('membership', ParseIntPipe) membership: number) {
    return this.userService.countByMembership(membership);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Get(':id/relations')
  findWithRelations(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findWithRelations(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Patch(':id/membership')
  updateMembership(
    @Param('id', ParseIntPipe) id: number,
    @Body('membership', ParseIntPipe) membership: number,
  ) {
    return this.userService.updateMembership(id, membership);
  }

  @Patch(':id/profile-image')
  updateProfileImage(
    @Param('id', ParseIntPipe) id: number,
    @Body('imagePath') imagePath: string,
  ) {
    return this.userService.updateProfileImage(id, imagePath);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }

  @Delete(':id/soft')
  @HttpCode(HttpStatus.NO_CONTENT)
  softDelete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.softDelete(id);
  }
}
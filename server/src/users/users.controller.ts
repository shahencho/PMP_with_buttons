import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersDto } from './dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() dto: UsersDto) {
    return this.usersService.createUser(dto);
  }

  @Get('getById')
  async getUserById(@Param() id:string) {
    return this.usersService.getUserById(id);
  }

  @Get('getAll')
  async getUsers() {
    return this.usersService.getUsers();
  }
}

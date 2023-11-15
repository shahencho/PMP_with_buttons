import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UsersDto } from './dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() dto: UsersDto) {
    return this.usersService.createUser(dto);
  }

  @Get('getById/:id')
  async getUserById(@Param('id') id:string) {
    return this.usersService.getUserById(id);
  }

  @Get('getAll')
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get('img/:imagename')
  getImage(@Param('imagename') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
}

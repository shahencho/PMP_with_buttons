import { Injectable } from '@nestjs/common';
import { UsersDto } from './dtos/users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UsersModel, UsersModelDocument } from './models/users.model';
import { Model } from 'mongoose';

//TODO При рефактронинге добавить репозиторий для работы с бд
@Injectable()
export class UsersService {

  constructor(@InjectModel(UsersModel.name)
  private usersModel: Model<UsersModelDocument>,
  ) {}

  async createUser(dto: UsersDto) {

    const newUser = new this.usersModel(dto);
    return newUser.save();
  }

  async getUserById(id: string) {
    return this.usersModel.findById( id);
  }

  async getUsers() {
    return this.usersModel.find();
  }


  // async deleteUser(id:'string') {
  //   return this.usersModel.deleteById( id );
  // }
}


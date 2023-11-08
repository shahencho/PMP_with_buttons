import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModel, UsersModelModelSchema } from './models/users.model';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: UsersModel.name, schema: UsersModelModelSchema },
    ]),
  ],
})
export class UsersModule {}

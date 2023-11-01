import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './services/messages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModel, MessagesModelSchema } from './models/messages.model';
import { ExternalMessages } from './services/external-messages';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, ExternalMessages],
  imports: [
    MongooseModule.forFeature([
      { name: MessagesModel.name, schema: MessagesModelSchema },
    ]),
  ],
})
export class MessagesModule {}

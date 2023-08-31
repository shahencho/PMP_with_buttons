import { MessagesDto } from '../dtos/messages.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MessagesModel, MessagesModelDocument } from '../models/messages.model';
import { Model } from 'mongoose';

export class MeessagesRepository {

  constructor(@InjectModel(MessagesModel.name)
  private messagesModel: Model<MessagesModelDocument>) {
  }

  async create(dto: MessagesDto) {
    const newMessage = new this.messagesModel(dto);
    return newMessage.save();
  }

  async getBySenderEmail(senderEmail: string) {
    return this.messagesModel.find({ senderEmail });
  }

  async getByReceiverEmail(receiverEmail: string) {
    return this.messagesModel.find({ receiverEmail });
  }


  async deleteById(id:'string') {
    return this.messagesModel.deleteOne({ id });
  }
}

import { Injectable } from '@nestjs/common';
import { MessagesDto } from '../dtos/messages.dto';
import { MeessagesRepository } from '../repositories/meessages.repository';
import { ExternalMessages } from './external-messages';


@Injectable()
export class MessagesService {
  private messageRepository : MeessagesRepository;

  constructor(private readonly  externalMessages: ExternalMessages) {
  }

  async createMessage(dto: MessagesDto) {
    const reqExternalMessages = await this.externalMessages.sendMessage(dto);
    console.log(reqExternalMessages);
    // return this.messageRepository.create(dto);
  }

  async getMessagesBySenderEmail(senderEmail: string) {
    return this.messageRepository.getBySenderEmail( senderEmail);
  }

  async getMessagesByReceiverEmail(receiverEmail: string) {
    return this.messageRepository.getByReceiverEmail(receiverEmail);
  }

  async deleteMessageById(id:'string') {
    return this.messageRepository.deleteById( id );
  }
}

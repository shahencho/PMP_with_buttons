import { Body, Controller, Post } from '@nestjs/common';
import { MessagesDto } from './dtos/messages.dto';
import { MessagesService } from './services/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Post('create')
  async createMessage(@Body() dto: MessagesDto) {
    return this.messageService.createMessage(dto);
  }

  @Post('get')
  async getMessages(@Body() dto: Pick<MessagesDto, 'senderEmail' | 'receiverEmail'>) {
    const { senderEmail, receiverEmail } = dto;
    if (senderEmail) {
      return this.messageService.getMessagesBySenderEmail(dto.senderEmail);
    } else if (receiverEmail) {
      return this.messageService.getMessagesByReceiverEmail(dto.receiverEmail);

    }
  }
}

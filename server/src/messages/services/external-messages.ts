import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MessagesDto } from '../dtos/messages.dto';
@Injectable()
export class ExternalMessages {

  constructor(private mailService: MailerService) {
  }

  async sendMessage(dto: MessagesDto) {
    const { externalReceiverEmail } = dto;
    console.log(externalReceiverEmail);
    const sentEmail = await this.mailService.sendMail({
      from:'pmptestmail777@gmail.com',
      to: externalReceiverEmail,
      subject: 'Good Job V2 ✔',
      text: 'new message 2',
    });
    return sentEmail;
  }

}

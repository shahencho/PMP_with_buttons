import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MessagesDto } from '../dtos/messages.dto';
@Injectable()
export class ExternalMessages {

  constructor(private mailService: MailerService) {
  }

  async sendMessage(dto: MessagesDto) {
    console.log(dto.externalReceiverEmail);
    // const { externalReceiverEmail } = dto;
    const sentEmail = await this.mailService.sendMail({
      from:'pmptestmail777@gmail.com',
      to: 'karoxa98@gmail.com',
      subject: 'Good Job V3 ✔',
      text: 'new message 2',
    });
    return sentEmail;
  }

}

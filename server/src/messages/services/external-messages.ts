import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MessagesDto } from '../dtos/messages.dto';
@Injectable()
export class ExternalMessages {

  constructor(private mailService: MailerService) {
  }

  async sendMessage(dto: MessagesDto) {
    console.log(dto.externalReceiverEmail);
    const { externalReceiverEmail } = dto;
    const { topic } = dto;
    const { sentText } = dto;
    const { subj } = dto;
    const combine_Topic_Subject = '[ '+topic+' ]' + subj;
    console.log(combine_Topic_Subject)

    const sentEmail = await this.mailService.sendMail({
      from: 'pmptestmail777@gmail.com',
      to: externalReceiverEmail,
      subject: combine_Topic_Subject,
      text: sentText,
    });
    return sentEmail;
  }

}

// const sentEmail = await this.mailService.sendMail({
//   from: 'pmptestmail777@gmail.com',
//   to: 'karoxa98@gmail.com',
//   subject: 'Good Job V3 ✔',
//   text: 'new message 2',

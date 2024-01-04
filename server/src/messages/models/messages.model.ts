import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessagesModelDocument = HydratedDocument<MessagesModel>;

@Schema()
export class MessagesModel {
  @Prop({ required: true })
    senderEmail: string;

  @Prop({ required: true })
    receiverEmail: string;

  //Адрес получателя на внешнюю почту
  @Prop()
    externalReceiverEmail: string | null;

  @Prop()
    topic: string | null;

  @Prop()
    sentText: string;

  @Prop()
    subj: string;

  @Prop()
    receivedText: string | null;

  @Prop({ required: true })
    price: number;

  //Cрок годности вопроса
  //TODO Переделать в LocalDate добавив библиотеку jsJoda для рабооты с датами
  @Prop({ required: true })
    shelfLife: string;

  //Актуален вопрос или протух
  @Prop({ required: true, default: true })
    isActual: boolean;
}

export const MessagesModelSchema = SchemaFactory.createForClass(MessagesModel);

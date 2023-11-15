import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersModelDocument = HydratedDocument<UsersModel>;

@Schema()
export class UsersModel {
  @Prop({ required: true })
    userName: string;

  @Prop({ required: true })
    role: string;

  @Prop()
    profession: string | null;

  @Prop()
    location: string | null;

  @Prop()
    totalDonation: string;

  @Prop()
    receivedMessages: number;

  @Prop()
    responseRate: string;

  @Prop()
    timeFit: string;

  @Prop()
    charity: string;

  @Prop()
    responseTime: string;

  @Prop()
    image: string;

}

export const UsersModelModelSchema = SchemaFactory.createForClass(UsersModel);

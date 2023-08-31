import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017'),
    // TypeOrmModule.forRootAsync(typeOrmConfig),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MessagesModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'pmptestmail777@gmail.com',
          pass: 'kkooqcvyxxjkxlzw',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

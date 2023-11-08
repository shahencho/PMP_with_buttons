import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
const logger = new Logger('AppBootstrap');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT') || 4000;

  app.enableCors({
    origin: [configService.get('CORS_REACT')],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  await app.listen(PORT, () => {
    logger.log(`Server running at port ${PORT}`);
  });
}
bootstrap();

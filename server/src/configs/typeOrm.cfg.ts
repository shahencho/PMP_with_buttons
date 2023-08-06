import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const DEFAULT_POSTGRES_HOST = 'localhost';
const DEFAULT_POSTGRES_PORT = 5432;

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService): PostgresConnectionOptions => {
    const database = configService.get('POSTGRES_DB');
    if (database === undefined) {
      throw new Error("Environment variable 'POSTGRES_DB' cannot be undefined");
    }

    return {
      type: 'postgres',
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      database,
      host: configService.get('POSTGRES_HOST') || DEFAULT_POSTGRES_HOST,
      port: configService.get('POSTGRES_PORT') || DEFAULT_POSTGRES_PORT,
      username: configService.get('POSTGRES_USERNAME'),
      password: configService.get('POSTGRES_PASSWORD'),
      synchronize: true,
    };
  },
  inject: [ConfigService],
};

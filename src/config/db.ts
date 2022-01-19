import { env } from '@base/utils/env';

export const dbConfig = {
  //dbConnection: env('TYPEORM_CONNECTION') || "mysql",
  // dbConnection: "mysql",
  type: 'mysql',
  dbHost: env('TYPEORM_HOST'),
  dbPort: env('TYPEORM_PORT'),
  dbDatabase: env('TYPEORM_DATABASE'),
  dbUsername: env('TYPEORM_USERNAME'),
  dbPassword: env('TYPEORM_PASSWORD'),
  dbEntities: env('TYPEORM_ENTITIES'),
  allowLogging: env('TYPEORM_LOGGING'),
  synchronize: true,
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  }
};

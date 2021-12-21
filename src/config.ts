import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    mongoo: {
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      host: process.env.MONGO_INITDB_ROOT_MONGO_HOST,
      port: process.env.MONGO_PORT,
      connection: process.env.MONGO_CONNECTION,
    },
    apikey: process.env.API_KEY,
  };
});

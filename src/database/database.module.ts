import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import config from '../config';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

export const APIKEY_PROD = '123';
export const API_KEY = '123456';

@Global()
@Module({
  imports: [
    //   MongooseModule.forRoot('mongodb://localhost:27017', {
    //   user: 'root',
    //   pass: 'root',
    //   dbName: 'dbmongo'
    // }
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, password, dbName } = configService.mongoo;
        return {
          // uri: `${connection}://${host}:${port}/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`,
          uri: `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? APIKEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName } =
          configService.mongoo;
        const uri = `${connection}:// ${user}: ${password}@${host}:${port}/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
        const client = new MongoClient(uri);
        client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO', MongooseModule],
})
export class DatabaseModule {}

import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
import { Db } from 'mongodb';
@Injectable()
export class AppService {
  constructor(
    @Inject('MONGO') private database: Db,
    @Inject(config.KEY)
    private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apikey = this.configService.apikey;
    const dbname = this.database;
    console.log(apikey);
    console.log(dbname);

    return `<h1>App Nest Mongo</h1>`;
  }
}

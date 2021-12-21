import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apikey = this.configService.apikey;
    const dbname = this.configService.database;
    console.log(apikey);
    console.log(dbname);

    return `<h1>App Nest Mongo</h1>`;
  }

  getDocs(): string {
    const apikey = this.configService.apikey;
    const dbname = this.configService.database;
    console.log(apikey);
    console.log(dbname);

    return `<h1>App Nest Mongo</h1>`;
  }
}

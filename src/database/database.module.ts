import { Module, Global } from '@nestjs/common';

export const APIKEY_PROD = '123';
export const API_KEY = '123456';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? APIKEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}

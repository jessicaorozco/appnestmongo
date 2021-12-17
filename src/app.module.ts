import { Module } from '@nestjs/common';
// import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductService } from './products/services/products.service';
import { UsersService } from './users/services/users.service';
import { UsersController } from './users/controllers/users.controller';
import { ProductsController } from './products/controllers/products.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    ProductsModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController, UsersController, ProductsController],
  providers: [
    UsersService,
    ProductService,
    AppService,
    // {
    //   provide: 'TASK',
    //   useFactory: async (http: HttpService) => {
    //     const task = await http
    //       .get('https://jsonplaceholder.typicode.com/todos')
    //       .toPromise();
    //     return task.data;
    //   },
    //   inject: [HttpService],
    // },
  ],
})
export class AppModule {}

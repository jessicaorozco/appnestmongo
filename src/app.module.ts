import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductService } from './products/services/products.service';
import { UsersService } from './users/services/users.service';
import { UsersController } from './users/controllers/users.controller';
import { ProductsController } from './products/controllers/products.controller';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';
import { ProductSchema } from './products/schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),

    ProductsModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController, UsersController, ProductsController],
  providers: [UsersService, ProductService, AppService],
})
export class AppModule {}

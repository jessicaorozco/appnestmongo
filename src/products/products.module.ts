import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from '../products/controllers/products.controller';
import { CategoriesController } from '../products/controllers/categories.controller';
import { ProductService } from '../products/services/products.service';
import { CategoryService } from '../products/services/categories.service';
import { ProductSchema } from './schemas/product.schema';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductsController, CategoriesController],
  providers: [CategoryService, ProductService, MongooseModule],
})
export class ProductsModule {}

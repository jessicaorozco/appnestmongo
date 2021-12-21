import { Module } from '@nestjs/common';

import { ProductsController } from '../products/controllers/products.controller';
import { CategoriesController } from '../products/controllers/categories.controller';
import { ProductService } from '../products/services/products.service';
import { CategoryService } from '../products/services/categories.service';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController],
  providers: [CategoryService, ProductService],
})
export class ProductsModule {}

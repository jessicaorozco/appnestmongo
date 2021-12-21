import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '../services/products.service';
// import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productsService.create(data);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateProductDto) {
    return this.productsService.update(id, data);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}

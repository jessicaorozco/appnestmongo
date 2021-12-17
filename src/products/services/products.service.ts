import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Product[] = [];

  async findAll() {
    return this.products;
  }

  async findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    return product;
  }

  async create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = await this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    const result = (this.products[index] = {
      ...product,
      ...payload,
    });
    return result;
  }
  async delete(id: number) {
    const product = await this.findOne(id);
    if (!product) {
      throw new Error('no exist');
    }
    const index = this.products.findIndex((item) => item.id === id);
    const result = this.products[index];
    return result;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
// import { productSchema } from '../schemas/productSchema';
import { ProductSchema } from '../schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<typeof ProductSchema>, // @InjectModel('Product') private productModel: Model<Product>,
  ) {}
  async findAll() {
    return await this.productModel.find().exec();
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product # ${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto) {
    console.log(data);
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }

  async update(id: string, changes: UpdateProductDto) {
    const product = await this.productModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!product) {
      throw new NotFoundException(`Product # ${id} not found`);
    }
    return product;
  }

  async remove(id: string) {
    const product = this.productModel.findOneAndDelete({ id });
    if (!product) {
      throw new NotFoundException(`Product # ${id} not found`);
    }
    return product;
  }
}

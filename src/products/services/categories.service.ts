import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';

@Injectable()
export class CategoryService {
  private counterId = 1;
  private categories: Category[] = [];

  async findAll() {
    return await this.categories;
  }

  async findOne(id: number) {
    const category = await this.categories.find((item) => item.id === id);
    return category;
  }

  async create(payload: CreateCategoryDto) {
    console.log(payload);
    this.counterId += 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async update(id: number, payload: UpdateCategoryDto) {
    const category = await this.findOne(id);
    const index = await this.categories.findIndex((item) => item.id === id);
    let result = (this.categories[index] = {
      ...category,
      ...payload,
    });
    return result;
  }
  async delete(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw new Error('no exist');
    }
    const index = this.categories.findIndex((item) => item.id === id);
    let result = this.categories[index];
    return result;
  }
}

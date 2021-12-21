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
import { CategoryService } from '../services/categories.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateCategoryDto } from '../dtos/categories.dtos';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.categoriesService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
      message: 'Category deleted',
    };
  }
}

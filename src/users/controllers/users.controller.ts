import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from '../dtos/users.dtos';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getProducts() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.usersService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
      message: 'Product deleted',
    };
  }
}

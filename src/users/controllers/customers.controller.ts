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
import { CustomersService } from '../services/customers.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/customers.dtos';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getProducts() {
    // const { limit, offset } = params;
    // return `limit =>${limit} offset=> ${offset}`;
    return this.customersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: string) {
    return this.customersService.findOne(+id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.customersService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
      message: 'Customer deleted',
    };
  }
}

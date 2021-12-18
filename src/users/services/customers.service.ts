import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [];

  async findAll() {
    return await this.customers;
  }

  async findOne(id: number) {
    const customer = await this.customers.find((item) => item.id === id);
    return customer;
  }

  async create(payload: CreateCustomerDto) {
    console.log(payload);
    this.counterId += 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    return this.customers.push(newCustomer);
  }

  async update(id: number, payload: UpdateCustomerDto) {
    const customer = await this.findOne(id);
    const index = await this.customers.findIndex((item) => item.id === id);
    let result = (this.customers[index] = {
      ...customer,
      ...payload,
    });
    return result;
  }
  async delete(id: number) {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new Error('no exist');
    }
    const index = this.customers.findIndex((item) => item.id === id);
    let result = this.customers[index];
    return result;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<typeof UserSchema>,
    private configService: ConfigService,
  ) {}

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: number) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User # ${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    console.log(data);
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`User # ${id} not found`);
    }
    return user;
  }
  async remove(id: number) {
    const user = this.userModel.findOneAndDelete({ id });
    if (!user) {
      throw new NotFoundException(`User # ${id} not found`);
    }
    return user;
  }
  // async getOrdersByUser(id: number): Order {
  //   const user = this.findOne(id);
  //   return {
  //     date: new Date(),
  //     user,
  //     products: await this.productsService.findAll(),
  //   };
  // }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {}
  private counterId = 1;
  private users: User[] = [];

  async findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    console.log(`${apiKey} ${dbName}`);
    return this.users;
  }

  async findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    return user;
  }

  async create(payload: CreateUserDto) {
    console.log(payload);
    this.counterId += 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(id: number, payload: UpdateUserDto) {
    const user = await this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    const result = (this.users[index] = {
      ...user,
      ...payload,
    });
    return result;
  }
  async delete(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('no exist');
    }
    const index = this.users.findIndex((item) => item.id === id);
    return this.users[index];
  }
}

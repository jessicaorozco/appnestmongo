import { Module } from '@nestjs/common';

import { CustomersController } from '../users/controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from '../users/controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}

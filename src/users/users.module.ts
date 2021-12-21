import { Module } from '@nestjs/common';

import { CustomersController } from '../users/controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from '../users/controllers/users.controller';
import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService, MongooseModule],
})
export class UsersModule {}

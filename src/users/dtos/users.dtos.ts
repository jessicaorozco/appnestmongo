import { IsString, IsDate, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsDate()
  @IsNotEmpty()
  readonly createat: Date;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

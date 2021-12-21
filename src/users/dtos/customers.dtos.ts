import {
  IsString,
  IsNumber,
  IsDate,
  IsNotEmpty,
  IsPhoneNumber,
} from 'class-validator';

import { PartialType } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsNumber()
  @IsNotEmpty()
  readonly userid: number;

  @IsDate()
  @IsNotEmpty()
  readonly createat: Date;
}
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Schema()
export class User {
  @IsString()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  password: string;

  @IsDate()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  createat: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

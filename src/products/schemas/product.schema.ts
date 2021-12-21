import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Schema()
export class Products {
  @IsString()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  stock: number;

  @IsString()
  @IsNotEmpty()
  @Prop()
  @ApiProperty()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);

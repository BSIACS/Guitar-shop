import { StringNumber } from '@guitar-shop/shared-types';
import { IsIn, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateProductDto{
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageSrc: string;

  @IsUUID()
  typeId: string;

  @IsString()
  article: string;

  @IsNumber()
  @IsIn([4, 6, 7, 12])
  stringNumber: StringNumber;

  @IsNumber()
  price: number;
}

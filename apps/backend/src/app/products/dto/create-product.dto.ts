import { StringNumber } from '@guitar-shop/shared-types';
import { IsIn, IsNumber, IsString, IsUUID, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateProductDto{
  @IsString()
  @MinLength(10)
  @MaxLength(100)
  title: string;

  @IsString()
  @MinLength(20)
  @MaxLength(1024)
  description: string;

  @IsString()
  imageSrc: string;

  @IsUUID()
  typeId: string;

  @IsString()
  @MinLength(5)
  @MaxLength(40)
  article: string;

  @IsNumber()
  @IsIn([4, 6, 7, 12])
  stringNumber: StringNumber;

  @IsNumber()
  @Min(100)
  @Max(1000000)
  price: number;
}

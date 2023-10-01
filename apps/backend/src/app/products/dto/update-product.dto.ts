import { StringNumber } from '@guitar-shop/shared-types';
import { IsIn, IsNumber, IsOptional, IsString, IsUUID, Max, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateProductDto{
  public id: string;

  @IsString()
  @MinLength(10)
  @MaxLength(100)
  @IsOptional()
  title?: string;

  @IsString()
  @MinLength(20)
  @MaxLength(1024)
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageSrc?: string;

  @IsUUID()
  @IsOptional()
  typeId: string;

  @IsString()
  @MinLength(5)
  @MaxLength(40)
  @IsOptional()
  article?: string;

  @IsNumber()
  @IsIn([4, 6, 7, 12])
  @IsOptional()
  stringNumber?: StringNumber;

  @IsNumber()
  @Min(100)
  @Max(1000000)
  @IsOptional()
  price?: number;
}

import { GuitarEnum, StringNumber } from '@guitar-shop/shared-types';
import { Transform } from 'class-transformer';
import { IsEnum,  IsIn,  IsNumber, IsOptional } from 'class-validator';
import { SortByEnum } from './sort-by.enum';
import { SortOrderEnum } from './sort-order.enum';

const DEFAULT_PAGE_NUMBER = 1;

export class ProductsQuery{
  @Transform(({value}) => +value || DEFAULT_PAGE_NUMBER)
  @IsNumber()
  @IsOptional()
  public page = DEFAULT_PAGE_NUMBER;

  @IsEnum(GuitarEnum)
  @IsOptional()
  public type: GuitarEnum;

  @IsOptional()
  @IsEnum(SortByEnum)
  public sortBy: SortByEnum;

  @IsOptional()
  @IsEnum(SortOrderEnum)
  public sortOrder: SortOrderEnum;

  @Transform(({value}) => +value)
  @IsNumber()
  @IsOptional()
  @IsIn([4, 6, 7, 12])
  stringNumber: StringNumber;
}

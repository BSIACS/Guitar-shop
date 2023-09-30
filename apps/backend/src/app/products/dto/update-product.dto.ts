import { StringNumber } from '@guitar-shop/shared-types';

export class UpdateProductDto{
  public id: string;
  public title?: string;
  public description?: string;
  public imageSrc?: string;
  public typeId?: string;
  public article?: string;
  public stringNumber?: StringNumber;
  public price?: number;
}

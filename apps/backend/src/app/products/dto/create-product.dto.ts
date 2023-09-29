import { StringNumber } from '@guitar-shop/shared-types';

export class CreateProductDto{
  title: string;
  description: string;
  dateAdded: Date;
  imageSrc: string;
  typeId: string;
  article: string;
  stringNumber: StringNumber;
  price: string;
}

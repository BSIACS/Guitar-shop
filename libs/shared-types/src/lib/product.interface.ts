import { GuitarEnum } from './guitar-type.enum';
import { StringNumber } from './string-number.type';

export interface ProductInterface{
  id?: string;
  title: string;
  description: string;
  dateAdded: Date;
  imageSrc: string;
  type: GuitarEnum;
  article: string;
  stringNumber: StringNumber;
  price: string;
}

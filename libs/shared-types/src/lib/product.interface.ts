import { StringNumber } from './string-number.type';

export interface ProductInterface {
  id?: string;
  title?: string;
  description?: string;
  dateAdded?: Date;
  imageSrc?: string;
  typeId?: string;
  article?: string;
  stringNumber?: StringNumber;
  price?: number;
}

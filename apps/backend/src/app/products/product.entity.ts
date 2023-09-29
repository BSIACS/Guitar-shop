
import { ProductInterface, StringNumber } from "@guitar-shop/shared-types";

export class ProductEntity{
  public id: string;
  public title: string;
  public description: string;
  public dateAdded: Date;
  public imageSrc: string;
  public typeId: string;
  public article: string;
  public stringNumber: StringNumber;
  public price: string;

  constructor(product: ProductInterface){
    this.fillEntity(product);
  }

  public toObject() {
    return {...this}
  }

  public fillEntity(product: ProductInterface){
    this.id = product.id;
    this.title = product.title;
    this.description = product.description;
    this.dateAdded = new Date();
    this.imageSrc = product.imageSrc;
    this.typeId = product.typeId;
    this.article = product.article;
    this.stringNumber = product.stringNumber;
    this.price = product.price;
  }
}

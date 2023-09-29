import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './product.entity';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {

  constructor(private readonly productsRepository: ProductsRepository){}

  public async getProducts() {
    return this.productsRepository.find();
  }


  public async getProductById(id: string) {
    return this.productsRepository.findById(id);
  }

  public async createProduct(createProductDto: CreateProductDto){
    const productEntity = new ProductEntity({ ...createProductDto })

     return this.productsRepository.createProduct(productEntity);
  }

  public async updateProduct(updateProductDto: UpdateProductDto){
    const productEntity = new ProductEntity({...updateProductDto});

     return this.productsRepository.updateProduct(updateProductDto.id, productEntity);
  }

  public async deleteProduct(id: string){

     return this.productsRepository.delete(id);
  }
}

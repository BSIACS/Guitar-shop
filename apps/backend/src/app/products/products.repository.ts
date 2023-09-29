import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductEntity } from './product.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsRepository {

  constructor(private readonly prisma: PrismaService){}

  public async find(){

    return this.prisma.product.findMany();
  }

  public async createProduct(productEntity: ProductEntity){
    const entityData = productEntity.toObject();

    return this.prisma.product.create({
      data: {...entityData, id: uuidv4()}
    });
  }

  public async updateProduct(id: string, productEntity: ProductEntity){
    const entityData = productEntity.toObject();

    return this.prisma.product.update({
      where: { id },
      data: entityData
    });
  }

  public async delete(id: string) {
    await this.prisma.product.delete({
      where: {
        id,
      }
    });
  }
}

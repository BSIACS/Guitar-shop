import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductEntity } from './product.entity';
import { v4 as uuidv4 } from 'uuid';
import { ProductsQuery } from './query/products.query';
import { SortByEnum } from './query/sort-by.enum';
import { SortOrderEnum } from './query/sort-order.enum';

const PRODUCTS_QUERY_LIMIT = 7;
const SORT_BY_DATE_ADDED_ORDER = 'asc';

@Injectable()
export class ProductsRepository {

  constructor(private readonly prisma: PrismaService) { }

  public async findById(id: string) {
    const product = await this.prisma.product.findMany({
      where: { id },
    });

    return product;
  }

  public async find({ page, sortBy, type, sortOrder = SortOrderEnum.ASC, stringNumber }: ProductsQuery) {
    const typeData = await this.prisma.type.findFirst({
      where: {
        name: type ?? '',
      },
    });

    const product = await this.prisma.product.findMany({
      where: {
        type: typeData ?? undefined,
        stringNumber: +stringNumber ?? undefined
      },
      include: {
        type: true
      },
      take: PRODUCTS_QUERY_LIMIT,
      orderBy: [
        {
          price: sortBy === SortByEnum.PRICE ? sortOrder : undefined,
          dateAdded: sortBy === SortByEnum.DATE_ADDED ? SORT_BY_DATE_ADDED_ORDER : undefined,
        }
      ],
      skip: page > 0 ? PRODUCTS_QUERY_LIMIT * (page - 1) : undefined,
    });

    return product;
  }

  public async createProduct(productEntity: ProductEntity) {
    const entityData = productEntity.toObject();

    return this.prisma.product.create({
      data: { ...entityData, id: uuidv4() }
    });
  }

  public async updateProduct(id: string, productEntity: ProductEntity) {
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

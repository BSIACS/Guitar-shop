import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from './products.service';



@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsRepository, ProductsService, PrismaService],
})
export class ProductsModule {}

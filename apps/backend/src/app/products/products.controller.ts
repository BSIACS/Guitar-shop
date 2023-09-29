import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService){}

  @Get('index')
  public async getProducts() {
    const product = await this.productsService.getProducts()

    return product;
  }

  @Get('index/:id')
  public async getProductDetail(@Param('id') id) {
    console.log(id);

    const product = await this.productsService.getProductById(id)

    return product;
  }

  @Get('detail')
  getDetail() {
    return 'Hello from ProductsController';
  }

  @Post('create')
  public async createProduct(@Body() createProductDto: CreateProductDto){
    const product = this.productsService.createProduct(createProductDto)

    return product;
  }

  @Post('update')
  public async updateProduct(@Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.updateProduct(updateProductDto);

    return product;
  }

  @Delete('delete/:id')
  public async deleteProduct(@Param('id') id: string) {

    await this.productsService.deleteProduct(id);
  }
}

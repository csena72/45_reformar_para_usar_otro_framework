import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './dto/products.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPing(): string {
    return this.appService.ping();
  }

  @Get('products')
  getProducts(): string {
    return this.appService.getProducts();
  }

  @Get('product/id')
  getProduct(id: any): string {
    return this.appService.getProduct(id);
  }

  @Post('product')
  createProduct(@Body() product: ProductDto): any {
    console.log(product);
    return product;
    //return this.appService.createProduct();
  }

  @Patch('product')
  updateProduct(): string {
    return this.appService.updateProduct();
  }

  @Delete('product')
  deleteProduct(): string {
    return this.appService.deleteProduct();
  }
}

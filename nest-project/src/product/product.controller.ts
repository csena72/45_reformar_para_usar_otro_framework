import { Controller,  Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from '../dto/products.dto';

@Controller()
export class ProductController {
    constructor(private readonly productService:ProductService) {}

    @Get('products')
    public async getProducts(): Promise<any> {
      return this.productService.getProducts();
    }

    @Get('product/:id')
    getProductById(@Param('id') id: string): any {
      return this.productService.getProductById(id);
    }

    @Post('product')
    createProduct(@Body() product: ProductDto): any {
      console.log(product);
      return product;
      //return this.productService.createProduct();
    }

    @Put('product/:id')
    updateProduct(@Param('id') id: string): any{
      return this.productService.updateProduct(id);
    }

    @Delete('product/:id')
    deleteProduct(@Param('id') id: string): any {
      return this.productService.deleteProduct(id);
    }
}

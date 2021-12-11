import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPing(): string {
    return 'Api Productos ok!';
  }

  getProducts(): string {
    return 'productos';
  }

  getProduct(id: any): string {
    return `Producto id: ${id}`;
  }

  createProduct(): string {
    return 'producto creado';
  }

  updateProduct(): string {
    return 'producto actualizado';
  }

  deleteProduct(): string {
    return 'producto eliminado';
  }
}

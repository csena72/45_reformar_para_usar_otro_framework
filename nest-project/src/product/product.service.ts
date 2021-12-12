import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getProducts(): string {
        return 'productos';
      }

      getProductById(id: any): string {
        return `Producto id: ${id}`;
      }

      createProduct(): string {
        return 'producto creado correctamente.';
      }

      updateProduct(id): string {
        return `Producto con id: ${id} actualizado correctamente.`;
      }

      deleteProduct(id): string {
        return `Producto con id: ${id} eliminado correctamente.`;
      }
}

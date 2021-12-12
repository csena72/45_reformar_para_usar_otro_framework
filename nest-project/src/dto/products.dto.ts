import { ApiProperty } from '@nestjs/swagger';

export class ProductDto{

  @ApiProperty()
    readonly id?: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  available: boolean;
}

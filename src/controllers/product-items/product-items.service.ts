import { Injectable } from '@nestjs/common';
import { CreateProductItemDto } from './dto/create-product-item.dto';
import { UpdateProductItemDto } from './dto/update-product-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductItem } from './entities/product-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductItemsService {
  constructor(
    @InjectRepository(ProductItem)
    private productItemEntity: Repository<ProductItem>,
  ) {}
  create(createProductItemDto: CreateProductItemDto) {
    try{
      this.productItemEntity
      .createQueryBuilder('product_item')
      .insert()
      .into(ProductItem)
      .values(createProductItemDto)
      .execute();

      return 'This action adds a new productItem';
    }
    catch(error) {
      return 'Something went wrong.'
    }
  }

  async findAll() {
    return await this.productItemEntity
      .createQueryBuilder('product_item')
      .select(['id', 'name', 'price', 'quantity'])
      .execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} productItem`;
  }

  update(id: number, updateProductItemDto: UpdateProductItemDto) {
    return `This action updates a #${id} productItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} productItem`;
  }
}

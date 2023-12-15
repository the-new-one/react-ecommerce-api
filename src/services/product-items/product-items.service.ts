import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/entity/Products';
import { GenericResponse } from 'src/models/Generic';
import { Items } from 'src/models/Item';
import { Repository } from 'typeorm';

@Injectable()
export class ProductItemsService {
    constructor(@InjectRepository(Products) private productEntity: Repository<Products>) {

    }
    
    async getAllProducts(): Promise<GenericResponse<Items[]>> {
        const products = await this.productEntity.createQueryBuilder('products').execute();

        return {
            code: 200,
            status: 1,
            message: 'All Products Item.',
            data: products
        }
    }
}

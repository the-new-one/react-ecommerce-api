import { Module } from '@nestjs/common';
import { ProductItemsController } from './product-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/entity/Products';
import { ProductItemsService } from 'src/services/product-items/product-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductItemsService],
  controllers: [ProductItemsController],
  exports: [TypeOrmModule]
})

export class ProductItemsModule {}

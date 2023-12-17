import { Module } from '@nestjs/common';
import { ProductItemsService } from './product-items.service';
import { ProductItemsController } from './product-items.controller';
import { ProductItem } from './entities/product-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductItemsController],
  imports: [TypeOrmModule.forFeature([ProductItem])],
  providers: [ProductItemsService],
})
export class ProductItemsModule {}

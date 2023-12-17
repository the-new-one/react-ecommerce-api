import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductItemsModule } from './controllers/product-items/product-items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductItem } from './controllers/product-items/entities/product-item.entity';

@Module({
  imports: [
    ProductItemsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [ProductItem],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

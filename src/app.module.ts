import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductItemsModule } from './controllers/product-items/product-items.module';
import { ProductItemsController } from './controllers/product-items/product-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entity/Products';
import { ProductItemsService } from './services/product-items/product-items.service';

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
      entities: [Products],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

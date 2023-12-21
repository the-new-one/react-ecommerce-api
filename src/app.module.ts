import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductItemsModule } from './controllers/product-items/product-items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductItem } from './controllers/product-items/entities/product-item.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Firestore } from '@google-cloud/firestore';
import { FirestoreModule } from './firestore.module';
import { AuthModule } from './controllers/auth/auth.module';
import { BillingModule } from './controllers/billing/billing.module';
import { UserCredModule } from './controllers/user-cred/user-cred.module';

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
    // firestore
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        keyFilename: configService.get<string>('SA_KEY')
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    BillingModule,
    UserCredModule
    // end of firestore
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

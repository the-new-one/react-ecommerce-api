import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static('public'));
  app.use('/public', express.static('public'));

  app.enableCors({
    origin: ['http://10.0.8.37:4000'],
  });

  await app.listen(4000);
}
bootstrap();

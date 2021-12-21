import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const whitelist = [
    'http://localhost:8080',
    'https://appnestmongo.herokuapp.com/',
  ];
  const options = {
    origin: (origin: any, callback: any) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('no permitido'));
      }
    },
  };
  const config = new DocumentBuilder()
    .setTitle('API nestjs nodejs')
    .setDescription('app test de nest con mongo')
    .setVersion('1.0')
    .addTag('Nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors(options);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

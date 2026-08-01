import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('CSR Angular Developer API')
    .setDescription('Documentación de los servicios del Portfolio')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  app.useGlobalInterceptors(new TransformInterceptor());

  app.enableCors({
    origin: [
      'https://csrangulardeveloper.nom.es',
      'http://localhost:4200',
      'http://localhost:4000',
    ],
  });

  await app.listen(process.env.PORT || 3000);
}
void bootstrap();

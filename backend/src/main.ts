import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('CSR Angular Developer API')
    .setDescription('Documentación de los servicios del Portfolio')
    .setVersion('1.0')
    .addTag('status')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  app.useGlobalInterceptors(new TransformInterceptor());

  app.enableCors({
    origin: ['https://csrangulardeveloper.nom.es', 'http://localhost:4200'],
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

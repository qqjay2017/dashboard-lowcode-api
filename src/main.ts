import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors();
  app.useGlobalInterceptors(new TransformInterceptor());
  const port = process.env.PORT || 80;

  await app.listen(port);
}
bootstrap();

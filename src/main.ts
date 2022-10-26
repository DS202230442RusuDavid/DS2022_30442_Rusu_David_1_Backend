import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({credentials: true, exposedHeaders: ["Set-Cookie"] });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  // app.enableCors({
  //   credentials: true,
  //   allowedHeaders: '*',
  //   exposedHeaders: 'Set-Cookie,set-cookie',
  //   // origin: 'http://localhost:3000',  
  // });
  await app.listen(3000);
}
bootstrap();

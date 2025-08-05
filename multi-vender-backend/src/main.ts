import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: new ConsoleLogger({
      json:true,
      colors:true,
      sorted:true,
      logLevels: ['log', 'error', 'warn', 'debug', 'verbose'],
      depth:10,


    }),
  
  
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
      transform: true, 
    }),
  );
  app.enableCors({
    origin:"*",
    credentials:true,
   
  });
   app.use(morgan('short')); 
   app.use(helmet());
  app.use(compression());
   const config = new DocumentBuilder()
    .setTitle('Multi Vendor Backend')
    .setDescription('The Multi Vendor Backend API description')
    .setVersion('1.0')
    .addTag('multi-vendor-backend')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();


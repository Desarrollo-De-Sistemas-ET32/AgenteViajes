import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activar validaciones globales con ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  // Habilitar CORS
  app.enableCors();

  // Configurar timeout de 5 minutos para la ruta específica
  app.use('/file/upload', (req, res, next) => {
    req.setTimeout(300000); // 5 minutos = 300000 ms
    next();
  });

  // Iniciar el servidor en el puerto 3000
  await app.listen(3000);

  console.log('Server running on http://localhost:3000');
  console.log('Upload endpoint: http://localhost:3000/file/upload');
}

bootstrap();
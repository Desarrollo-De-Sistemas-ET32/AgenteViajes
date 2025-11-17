import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // <-- sin cors:true

  app.enableCors({
    origin: ['http://localhost:3001'], // solo tu frontend
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
    ],
    exposedHeaders: [
      'Content-Range',
      'X-Content-Range',
      'X-Total-Count',
    ], // Headers que el frontend puede leer en la respuesta
    maxAge: 3600,
  });
  
  
  app.use('/file/upload', (req, res, next) => {
    req.setTimeout(300000); // 5 minutos timeout
    next();
  });

  console.log('Server running on http://localhost:3307');
  console.log('Upload endpoint: http://localhost:3000/file/upload');
  
  await app.listen(3000);
}
bootstrap();

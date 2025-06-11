import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS si es necesario
  app.enableCors();
  
  // Aumentar límite de payload para archivos grandes
  app.use('/file/upload', (req, res, next) => {
    req.setTimeout(300000); // 5 minutos timeout
    next();
  });

  console.log('Server running on http://localhost:3000');
  console.log('Upload endpoint: http://localhost:3000/file/upload');
  
  await app.listen(3000);
}
bootstrap();


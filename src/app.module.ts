import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const env = process.env.DB_PASSWORD
console.log(env)



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'mfxpaasshtxlsxjxcyvr.supabase.co',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: 'postgres',
      synchronize: false,
      ssl: {
        rejectUnauthorized: false
      }.
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

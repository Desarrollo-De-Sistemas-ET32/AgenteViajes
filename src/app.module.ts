import { Module } from '@nestjs/common';
import { FileModule } from './files-endpoint/file.module';

@Module({
  imports: [FileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}



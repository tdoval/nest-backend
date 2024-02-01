import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { ResultadoSchema } from './google/resultado/resultado.model';

@Module({
  imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'Resultado', schema: ResultadoSchema }])],
  controllers: [GoogleController],
  providers: [GoogleService],
})
export class AppModule { }

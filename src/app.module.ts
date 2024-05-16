import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FilmModule } from './film/film.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmEntity } from './film/entity/film.entity';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: 5432,
    password: 'pgpassword',
    username: 'pguser',
    entities: [FilmEntity],
    database: 'pguser',
    synchronize: true,
    logging: true,
  }), FilmModule, AuthModule, CacheModule.register({ isGlobal: true, ttl: 10000 })],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { FilmController } from "./film.controller";
import { FilmService } from "./film.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilmEntity } from "./entity/film.entity";

@Module({
    imports: [TypeOrmModule.forFeature([FilmEntity])],
    controllers: [FilmController],
    providers: [FilmService],
    exports: [FilmService]
})
export class FilmModule{}
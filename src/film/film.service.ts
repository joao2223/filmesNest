import {
    Injectable,
    NotFoundException,
    BadRequestException,
  } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FilmEntity } from './entity/film.entity';
import { CreateFilmDTO } from './dto/create-film.dto';
import { UpdatePutFilmDTO } from './dto/update-put-film.dto';
import { UpdatePatchFilmDTO } from './dto/update-patch-film.dto';
  
  @Injectable()
  export class FilmService {
    constructor(
      @InjectRepository(FilmEntity)
      private filmsRepository: Repository<FilmEntity>,
    ) {}
  
    async create(data: CreateFilmDTO) {
  
      const film = this.filmsRepository.create(data);
  
      return this.filmsRepository.save(film);
    }
  
    async list() {
      return this.filmsRepository.find();
    }
  
    async show(id: number) {
      await this.exists(id);
  
      return this.filmsRepository.findOneBy({
        id,
      });
    }
  
    async update(
      id: number,
      {filme, duracao, genero, nota }: UpdatePutFilmDTO,
    ) {
      await this.exists(id);
  
      await this.filmsRepository.update(id, {
        filme,
        duracao,
        genero,
        nota,
      });
  
      return this.show(id);
    }
  
    async updatePartial(
      id: number,
      {filme, duracao, genero, nota }: UpdatePatchFilmDTO,
    ) {
      await this.exists(id);
  
      const data: any = {};
  
      if (filme) {
        data.filme = filme;
      }
  
      if (duracao) {
        data.duracao = duracao;
      }
  
      if (genero) {
        data.genero = genero;
      }

      if (nota) {
        data.nota = nota;
      }
  
      await this.filmsRepository.update(id, data);
  
      return this.show(id);
    }
  
    async delete(id: number) {
      await this.exists(id);
  
      await this.filmsRepository.delete(id);
  
      return true;
    }
  
    async exists(id: number) {
      if (
        !(await this.filmsRepository.exist({
          where: {
            id,
          },
        }))
      ) {
        throw new NotFoundException(`O filme ${id} não existe.`);
      }
    }
  }
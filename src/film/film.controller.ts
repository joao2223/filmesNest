import { Body, Controller, Post, Get, Param, Put, Patch, Delete, ParseIntPipe, UseGuards, UseInterceptors } from "@nestjs/common";
import { CreateFilmDTO } from "./dto/create-film.dto";
import { UpdatePutFilmDTO } from "./dto/update-put-film.dto";
import { UpdatePatchFilmDTO } from "./dto/update-patch-film.dto";
import { FilmService } from "./film.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { CacheInterceptor } from "@nestjs/cache-manager";

@ApiBearerAuth()
@ApiTags('films')
@Controller('films')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(CacheInterceptor)
export class FilmController{
    constructor(private readonly filmService: FilmService){}

    @Post()
    async create(@Body() data: CreateFilmDTO){
        return  this.filmService.create(data);
    }

    @Get()
    async list(){
        return this.filmService.list();
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.show(id);
    }

    @Put(':id')
    async update(@Body() data: UpdatePutFilmDTO, @Param('id', ParseIntPipe) id: number) {
        return this.filmService.update(id, data);
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchFilmDTO, @Param('id', ParseIntPipe) id: number) {
        return this.filmService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id) {
        return {
            success: await this.filmService.delete(id),
          };
    }

}
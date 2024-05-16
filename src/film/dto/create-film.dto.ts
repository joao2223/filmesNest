import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Matches, Max, Min } from "class-validator";


export class CreateFilmDTO {
    @ApiProperty({
        description:'Nome do filme que deseja adicionar ao catálogo',
        example:'Pulp Fiction'
    })
    @IsString()
    filme: string;

    @ApiProperty({
        description: 'Duração do filme a ser adicionado',
        example: '1h20m',
      })
      @IsString()
      @Matches(/^(\d+h)?(\d+m)?$/, {
        message: 'The duration should have the format "1h20min", "1h" or "30m"',
      })
      duracao: string;

    @ApiProperty({
        description:'Gênero do filme',
        example:'drama'
    })
    @IsString()
    genero: string;

    @ApiProperty({
        description:'Nota do filme',
        example:10,
    })
    @IsNumber()
    @Max(10)
    @Min(0)
    nota: number;

}
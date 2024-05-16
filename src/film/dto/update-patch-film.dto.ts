import { PartialType } from "@nestjs/swagger";
import { CreateFilmDTO } from "./create-film.dto";


export class UpdatePatchFilmDTO extends PartialType(CreateFilmDTO) {
}
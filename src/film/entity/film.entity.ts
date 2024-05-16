import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FilmEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filme: string;

    @Column()
    duracao: string;

    @Column()
    genero:string;

    @Column()
    nota: number;

}
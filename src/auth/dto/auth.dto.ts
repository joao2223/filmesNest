import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({ example: 'admin', description: 'Nome do usuário que tem permissão' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'admin123', description: 'Senha do usuário' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

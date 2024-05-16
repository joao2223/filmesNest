import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: AuthDto): Promise<{ token: string }> {
    const { username, password } = authDto;
    // Verificar se as credenciais estão corretas (exemplo simples)
    if (username === 'admin' && password === 'admin123') {
      const token = await this.authService.generateToken({ username });
      return { token };
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
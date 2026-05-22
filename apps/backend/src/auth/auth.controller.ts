import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidateTokenDto } from './dto/validate-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate-token')
  validateToken(@Body() dto: ValidateTokenDto) {
    return this.authService.validateToken(dto.token);
  }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly config: ConfigService) {}

  validateToken(token: string): { valid: boolean } {
    const adminToken = this.config.get<string>('ADMIN_TOKEN');
    return { valid: token === adminToken };
  }
}

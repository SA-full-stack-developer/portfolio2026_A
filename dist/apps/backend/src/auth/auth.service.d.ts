import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly config;
    constructor(config: ConfigService);
    validateToken(token: string): {
        valid: boolean;
    };
}

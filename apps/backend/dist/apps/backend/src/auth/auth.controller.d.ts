import { AuthService } from './auth.service';
import { ValidateTokenDto } from './dto/validate-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    validateToken(dto: ValidateTokenDto): {
        valid: boolean;
    };
}

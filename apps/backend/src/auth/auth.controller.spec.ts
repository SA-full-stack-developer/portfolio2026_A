import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ValidateTokenDto } from './dto/validate-token.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: jest.Mocked<AuthService>;

  beforeEach(async () => {
    const mockAuthService: jest.Mocked<Partial<AuthService>> = {
      validateToken: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('validateToken', () => {
    it('should call authService.validateToken with the token from the body', () => {
      const dto: ValidateTokenDto = { token: 'my-token' };
      authService.validateToken.mockReturnValue({ valid: true });

      controller.validateToken(dto);

      expect(authService.validateToken).toHaveBeenCalledWith('my-token');
    });

    it('should return { valid: true } when service returns valid token', () => {
      const dto: ValidateTokenDto = { token: 'valid-token' };
      authService.validateToken.mockReturnValue({ valid: true });

      const result = controller.validateToken(dto);

      expect(result).toEqual({ valid: true });
    });

    it('should return { valid: false } when service returns invalid token', () => {
      const dto: ValidateTokenDto = { token: 'invalid-token' };
      authService.validateToken.mockReturnValue({ valid: false });

      const result = controller.validateToken(dto);

      expect(result).toEqual({ valid: false });
    });

    it('should call authService.validateToken exactly once per request', () => {
      const dto: ValidateTokenDto = { token: 'any-token' };
      authService.validateToken.mockReturnValue({ valid: false });

      controller.validateToken(dto);

      expect(authService.validateToken).toHaveBeenCalledTimes(1);
    });
  });
});

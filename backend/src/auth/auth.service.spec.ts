import { Test, TestingModule } from '@nestjs/testing';

import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let configService: jest.Mocked<ConfigService>;

  beforeEach(async () => {
    const mockConfigService: jest.Mocked<Partial<ConfigService>> = {
      get: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    configService = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateToken', () => {
    it('should return { valid: true } when token matches ADMIN_TOKEN', () => {
      configService.get.mockReturnValue('secret-token');

      const result = service.validateToken('secret-token');

      expect(result).toEqual({ valid: true });
      expect(configService.get).toHaveBeenCalledWith('ADMIN_TOKEN');
    });

    it('should return { valid: false } when token does not match ADMIN_TOKEN', () => {
      configService.get.mockReturnValue('secret-token');

      const result = service.validateToken('wrong-token');

      expect(result).toEqual({ valid: false });
    });

    it('should return { valid: false } when ADMIN_TOKEN is undefined', () => {
      configService.get.mockReturnValue(undefined);

      const result = service.validateToken('any-token');

      expect(result).toEqual({ valid: false });
    });

    it('should return { valid: true } when both token and ADMIN_TOKEN are empty strings', () => {
      configService.get.mockReturnValue('');

      const result = service.validateToken('');

      expect(result).toEqual({ valid: true });
    });
  });
});

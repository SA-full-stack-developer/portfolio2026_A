import { Test, TestingModule } from '@nestjs/testing';

import { UnauthorizedException } from '@nestjs/common';
import { ApiKeyGuard } from './api-key.guard';

describe('ApiKeyGuard', () => {
  let guard: ApiKeyGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiKeyGuard],
    }).compile();

    guard = module.get<ApiKeyGuard>(ApiKeyGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('canActivate', () => {
    it('should return true if API key is valid', () => {
      process.env.ADMIN_API_KEY = 'valid-key';
      const mockContext = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: { 'x-api-key': 'valid-key' },
          }),
        }),
      } as any;

      const result = guard.canActivate(mockContext);
      expect(result).toBe(true);
    });

    it('should throw UnauthorizedException if API key is invalid', () => {
      process.env.ADMIN_API_KEY = 'valid-key';
      const mockContext = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: { 'x-api-key': 'invalid-key' },
          }),
        }),
      } as any;

      expect(() => guard.canActivate(mockContext)).toThrow(
        UnauthorizedException,
      );
      expect(() => guard.canActivate(mockContext)).toThrow(
        'No tienes permiso para acceder a esta señal.',
      );
    });

    it('should throw UnauthorizedException if API key is missing', () => {
      process.env.ADMIN_API_KEY = 'valid-key';
      const mockContext = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: {},
          }),
        }),
      } as any;

      expect(() => guard.canActivate(mockContext)).toThrow(
        UnauthorizedException,
      );
    });
  });
});

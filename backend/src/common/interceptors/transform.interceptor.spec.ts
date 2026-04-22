import { CallHandler, ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { of } from 'rxjs';
import { TransformInterceptor } from './transform.interceptor';

describe('TransformInterceptor', () => {
  let interceptor: TransformInterceptor<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransformInterceptor],
    }).compile();

    interceptor = module.get<TransformInterceptor<any>>(TransformInterceptor);
  });

  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });

  describe('intercept', () => {
    it('should transform the response data with timestamp', (done) => {
      const mockContext = {} as ExecutionContext;
      const mockNext: CallHandler = {
        handle: () => of({ message: 'test' }),
      };

      const result = interceptor.intercept(mockContext, mockNext);

      result.subscribe((response) => {
        expect(response).toHaveProperty('data');
        expect(response).toHaveProperty('timestamp');
        expect(response.data).toEqual({ message: 'test' });
        expect(typeof response.timestamp).toBe('string');
        // Check if timestamp is a valid ISO string
        expect(new Date(response.timestamp).toISOString()).toBe(
          response.timestamp,
        );
        done();
      });
    });

    it('should handle empty data', (done) => {
      const mockContext = {} as ExecutionContext;
      const mockNext: CallHandler = {
        handle: () => of(null),
      };

      const result = interceptor.intercept(mockContext, mockNext);

      result.subscribe((response) => {
        expect(response.data).toBeNull();
        expect(response).toHaveProperty('timestamp');
        done();
      });
    });
  });
});

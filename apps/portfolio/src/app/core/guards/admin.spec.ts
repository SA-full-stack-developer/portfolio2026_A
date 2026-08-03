import { ActivatedRouteSnapshot, Router, convertToParamMap } from '@angular/router';
import { of, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SessionService } from '@core/services/session';
import { environment } from '@env/environment';
import { adminGuard } from './admin';

describe('adminGuard', () => {
  let router: jest.Mocked<Router>;
  let http: jest.Mocked<HttpClient>;
  let session: jest.Mocked<SessionService>;
  let mockRoute: Partial<ActivatedRouteSnapshot>;

  const mockUrlTree = { toString: () => '/' } as any;

  const runGuard = () =>
    TestBed.runInInjectionContext(() =>
      adminGuard(mockRoute as ActivatedRouteSnapshot, null as any),
    );

  beforeEach(() => {
    router = { createUrlTree: jest.fn().mockReturnValue(mockUrlTree) } as any;
    http = { post: jest.fn() } as any;
    session = { setAdmin: jest.fn() } as any;
    mockRoute = { paramMap: convertToParamMap({}) };

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: router },
        { provide: HttpClient, useValue: http },
        { provide: SessionService, useValue: session },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });
  });

  describe('when platform is server (SSR)', () => {
    beforeEach(() => {
      TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    });

    it('should return true without any HTTP call', async () => {
      const result = await runGuard();

      expect(result).toBe(true);
      expect(http.post).not.toHaveBeenCalled();
    });
  });

  describe('when platform is browser', () => {
    describe('and token is missing', () => {
      it('should redirect to root without HTTP call', async () => {
        mockRoute = { paramMap: convertToParamMap({}) };

        const result = await runGuard();

        expect(result).toBe(mockUrlTree);
        expect(router.createUrlTree).toHaveBeenCalledWith(['/']);
        expect(http.post).not.toHaveBeenCalled();
      });
    });

    describe('and token is present', () => {
      beforeEach(() => {
        mockRoute = { paramMap: convertToParamMap({ token: 'my-token' }) };
      });

      it('should call the validate-token endpoint with the token', async () => {
        http.post.mockReturnValue(of({ data: { valid: true } }));

        await runGuard();

        expect(http.post).toHaveBeenCalledWith(`${environment.apiUrl}/auth/validate-token`, {
          token: 'my-token',
        });
      });

      it('should call session.setAdmin(true) when token is valid', async () => {
        http.post.mockReturnValue(of({ data: { valid: true } }));

        await runGuard();

        expect(session.setAdmin).toHaveBeenCalledWith(true);
      });

      it('should call session.setAdmin(false) when token is invalid', async () => {
        http.post.mockReturnValue(of({ data: { valid: false } }));

        await runGuard();

        expect(session.setAdmin).toHaveBeenCalledWith(false);
      });

      it('should call session.setAdmin(false) when HTTP call throws', async () => {
        http.post.mockReturnValue(throwError(() => new Error('Network error')));

        await runGuard();

        expect(session.setAdmin).toHaveBeenCalledWith(false);
      });

      it('should always redirect to root after validation', async () => {
        http.post.mockReturnValue(of({ data: { valid: true } }));

        const result = await runGuard();

        expect(result).toBe(mockUrlTree);
        expect(router.createUrlTree).toHaveBeenCalledWith(['/']);
      });

      it('should redirect to root even after HTTP error', async () => {
        http.post.mockReturnValue(throwError(() => new Error('Network error')));

        const result = await runGuard();

        expect(result).toBe(mockUrlTree);
        expect(router.createUrlTree).toHaveBeenCalledWith(['/']);
      });
    });
  });
});

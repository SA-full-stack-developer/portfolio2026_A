import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { apiErrorLoggingInterceptor } from './api-error-logging.interceptor';

describe('apiErrorLoggingInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(withInterceptors([apiErrorLoggingInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should log the error and rethrow it when a request fails', (done) => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

    http.get('/test-endpoint').subscribe({
      next: () => fail('expected an error'),
      error: (err) => {
        expect(consoleErrorSpy).toHaveBeenCalledWith('API Error:', err);
        consoleErrorSpy.mockRestore();
        done();
      },
    });

    const req = httpMock.expectOne('/test-endpoint');
    req.flush('Server error', { status: 500, statusText: 'Server Error' });
  });

  it('should not log anything when the request succeeds', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

    http.get('/test-endpoint').subscribe();

    const req = httpMock.expectOne('/test-endpoint');
    req.flush({ ok: true });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});

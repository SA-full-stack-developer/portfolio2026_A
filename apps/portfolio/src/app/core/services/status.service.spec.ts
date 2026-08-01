import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { StatusService } from './status.service';

class MockTranslateService {
  instant = jest.fn((key: string) => key);
}

describe('StatusService', () => {
  let service: StatusService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/status`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TranslateService, useClass: MockTranslateService },
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StatusService);
    TestBed.tick(); // fuerza la petición reactiva inicial del httpResource
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush({ data: { status: 'Online' } });
    expect(service).toBeTruthy();
  });

  it('should set error signal when the request fails', async () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush('Server error', { status: 500, statusText: 'Server Error' });
    await Promise.resolve();
    TestBed.tick();
    expect(service.error()).toBe('ERRORS.API');
  });

  it('should load status correctly on initialization', async () => {
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ data: { status: 'Online' } });
    await Promise.resolve();
    TestBed.tick();
    expect(service.status()).toBe('Online');
  });
});

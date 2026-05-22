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
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush({ data: { status: 'Online' } });
    expect(service).toBeTruthy();
  });

  it('should load status correctly on initialization', () => {
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ data: { status: 'Online' } });
    expect(service.status()).toBe('Online');
  });

  it('should handle error and set default status', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush('Error de servidor', { status: 500, statusText: 'Server Error' });
    expect(service.status()).toBe('');
  });

  it('should call loadStatus manually if needed', () => {
    const req1 = httpMock.expectOne(apiUrl);
    req1.flush({ data: { status: 'Online' } });

    service.loadStatus();
    const req2 = httpMock.expectOne(apiUrl);
    req2.flush({ data: { status: 'Offline' } });

    expect(service.status()).toBe('Offline');
  });
});

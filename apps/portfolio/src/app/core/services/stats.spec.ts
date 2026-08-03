import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { STATS_MOCK } from '@core/mocks/stats.mock';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { StatsService } from './stats';

class MockTranslateService {
  instant = jest.fn((key: string) => key);
}

describe('StatsService', () => {
  let service: StatsService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/stats`;

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
    service = TestBed.inject(StatsService);
    TestBed.tick(); // fuerza la petición reactiva inicial del httpResource
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush({ data: [] });
    expect(service).toBeTruthy();
  });

  it('should set error signal when the request fails', async () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush('Server error', { status: 500, statusText: 'Server Error' });
    await Promise.resolve();
    TestBed.tick();
    expect(service.error()).toBe('ERRORS.API');
  });

  it('should load stats and update the signal', async () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush({ data: STATS_MOCK });
    await Promise.resolve();
    TestBed.tick();
    expect(service.stats().length).toBe(4);
    expect(service.stats()).toEqual(STATS_MOCK);
  });
});

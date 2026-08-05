import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EXPERIENCES_MOCK } from '@core/mocks/experiences';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { ExperienceService } from './experience';

class MockTranslateService {
  instant = jest.fn((key: string) => key);
}

describe('ExperienceService', () => {
  let service: ExperienceService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/experience`;

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
    service = TestBed.inject(ExperienceService);
    TestBed.tick();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush({ data: [] });
    expect(service).toBeTruthy();
  });

  it('should load experiences correctly on initialization', async () => {
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush({ data: EXPERIENCES_MOCK });
    await Promise.resolve();
    TestBed.tick();
    expect(service.experiences()).toEqual(EXPERIENCES_MOCK);
  });

  it('should set error signal when the request fails', async () => {
    const req = httpMock.expectOne(apiUrl);
    req.flush('Server error', { status: 500, statusText: 'Server Error' });
    await Promise.resolve();
    TestBed.tick();
    expect(service.error()).toBe('ERRORS.API');
  });

  it('should expose the loading state as a boolean', () => {
    const req = httpMock.expectOne(apiUrl);
    expect(typeof service.isLoading()).toBe('boolean');
    req.flush({ data: [] });
  });
});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ResolvedExperience } from '@portfolio/shared/models';
import { ExperienceService } from './experience.service';

// Mock loader
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      ERRORS: {
        API: 'API Error occurred',
      },
    } as TranslationObject);
  }
}
class MockTranslateService {
  instant(key: string): string {
    if (key === 'ERRORS.API') return 'API Error occurred';
    return key;
  }
}
describe('ExperienceService', () => {
  let service: ExperienceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: TranslateService, useClass: MockTranslateService },
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    // Service creation triggers fetchExperience in constructor
    service = TestBed.inject(ExperienceService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    // Consume the HTTP request made by constructor
    const req = httpMock.expectOne((request) => request.url.includes('/experience'));
    req.flush({ data: [] });
  });

  it('should fetch experiences successfully on initialization', () => {
    const mockExperiences: ResolvedExperience[] = [
      {
        id: '1',
        companyId: '1',
        roles: ['Developer'],
        description: 'Test experience',
        showCompany: true,
        company: { id: '1', name: 'Test Company' },
        projects: [{ id: '1', name: 'Test Project', description: 'Test', companyId: '1' }],
        skills: [],
      },
    ];

    // Fetch was called in constructor, intercept the request
    const req = httpMock.expectOne((request) => request.url.includes('/experience'));
    expect(req.request.method).toBe('GET');
    req.flush({ data: mockExperiences });

    expect(service.experiences()).toEqual(mockExperiences);
    expect(service.loading()).toBe(false);
    expect(service.error()).toBe(null);
  });

  it('should handle API error on initialization', () => {
    // Fetch was called in constructor, intercept the request
    const req = httpMock.expectOne((request) => request.url.includes('/experience'));
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('network error'));

    expect(service.experiences()).toEqual([]);
    expect(service.loading()).toBe(false);
    expect(service.error()).toBe('API Error occurred');
  });
});

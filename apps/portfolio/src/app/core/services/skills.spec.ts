import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SKILLS_MOCK } from '@core/mocks/skills.mock';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { SkillsService } from './skills';

const SKILL_CATEGORIES_MOCK = ['frontend', 'backend', 'devops', 'tools', 'soft'] as const;

class MockTranslateService {
  instant = jest.fn((key: string) => key);
}

describe('SkillsService', () => {
  let service: SkillsService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/skills`;
  const categoriesUrl = `${apiUrl}/categories`;

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
    service = TestBed.inject(SkillsService);
    TestBed.tick(); // fuerza las dos peticiones reactivas iniciales
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    httpMock.expectOne((req) => req.url === apiUrl).flush({ data: [] });
    httpMock.expectOne(categoriesUrl).flush({ data: [] });
    expect(service).toBeTruthy();
  });

  it('should load skills and categories on initialization', async () => {
    const skillsReq = httpMock.expectOne((req) => req.url === apiUrl);
    expect(skillsReq.request.params.get('onlyHighlighted')).toBe('false');
    skillsReq.flush({ data: SKILLS_MOCK });

    const categoriesReq = httpMock.expectOne(categoriesUrl);
    categoriesReq.flush({ data: SKILL_CATEGORIES_MOCK });

    await Promise.resolve();
    TestBed.tick();
    await Promise.resolve();
    TestBed.tick();

    expect(service.skills().length).toBe(SKILLS_MOCK.length);
    expect(service.categories()).toEqual(SKILL_CATEGORIES_MOCK);
  });

  it('should refetch skills automatically when the filter changes', () => {
    httpMock.expectOne((req) => req.url === apiUrl).flush({ data: SKILLS_MOCK });
    httpMock.expectOne(categoriesUrl).flush({ data: SKILL_CATEGORIES_MOCK });

    service.setFilter({ category: 'frontend' });
    TestBed.tick();

    const req = httpMock.expectOne((req) => req.url === apiUrl);
    expect(req.request.params.get('category')).toBe('frontend');
    req.flush({ data: SKILLS_MOCK.filter((s) => s.category === 'frontend') });

    expect(service.filter().category).toBe('frontend');
  });

  it('should set error signal when the request fails', async () => {
    const skillsReq = httpMock.expectOne((req) => req.url === apiUrl);
    const categoriesReq = httpMock.expectOne(categoriesUrl);
    skillsReq.flush('Server error', { status: 500, statusText: 'Server Error' });
    categoriesReq.flush({ data: [] });
    await Promise.resolve();
    TestBed.tick();
    expect(service.error()).toBe('ERRORS.API');
  });

  it('should reset the page to 1 when the filter changes', () => {
    httpMock.expectOne((req) => req.url === apiUrl).flush({ data: SKILLS_MOCK });
    httpMock.expectOne(categoriesUrl).flush({ data: SKILL_CATEGORIES_MOCK });

    service.loadMore();
    expect(service.page()).toBe(2);

    service.setFilter({ onlyHighlighted: true });
    TestBed.tick();

    httpMock.expectOne((req) => req.url === apiUrl).flush({ data: [] });
    expect(service.page()).toBe(1);
  });
});

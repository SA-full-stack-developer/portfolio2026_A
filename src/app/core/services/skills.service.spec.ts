import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateLoader, TranslateService, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SKILLS_MOCK } from '@core/mocks/skills.mock';
import { environment } from '@env/environment';
import { SkillsService } from './skills.service';

// Mock loader
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      SKILLS: {
        ERRORS: {
          FETCH_ERROR: 'Error fetching skills',
        },
      },
    } as TranslationObject);
  }
}

class MockTranslateService {
  instant = jest.fn((key: string) => {
    if (key === 'SKILLS.ERRORS.FETCH_ERROR') {
      return 'No se pudieron cargar las habilidades. Inténtalo de nuevo más tarde.';
    }
    return key;
  });
}

describe('SkillsService', () => {
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/skills`;

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
  });

  function createServiceWithMocks(): SkillsService {
    const service = TestBed.inject(SkillsService);
    const skillsReq = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false`);
    skillsReq.flush(SKILLS_MOCK);
    const categoriesReq = httpMock.expectOne(`${apiUrl}/categories`);
    categoriesReq.flush(['frontend', 'backend', 'mobile', 'devops', 'tools']);
    return service;
  }

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service = createServiceWithMocks();
    expect(service).toBeTruthy();
  });

  it('should start with all skills from SKILLS_DATA', () => {
    const service = createServiceWithMocks();
    expect(service.skills()).toHaveLength(SKILLS_MOCK.length);
  });

  it('should start with default filter', () => {
    const service = createServiceWithMocks();
    expect(service.filter().category).toBe('all');
    expect(service.filter().onlyHighlighted).toBe(false);
  });

  it('should start showing first page of skills when filter is default', () => {
    const service = createServiceWithMocks();
    expect(service.filteredSkills()).toHaveLength(service.PAGE_SIZE);
  });

  it('should have allFilteredSkills equal to all skills on init', () => {
    const service = createServiceWithMocks();
    expect(service.allFilteredSkills()).toHaveLength(SKILLS_MOCK.length);
  });

  it('should return unique categories', () => {
    const service = createServiceWithMocks();
    const categories = service.categories();
    const unique = new Set(categories);
    expect(categories.length).toBe(unique.size);
  });

  it('should include frontend in categories', () => {
    const service = createServiceWithMocks();
    expect(service.categories()).toContain('frontend');
  });

  it('should return correct totalSkills', () => {
    const service = createServiceWithMocks();
    expect(service.totalSkills()).toBe(SKILLS_MOCK.length);
  });

  it('should return correct highlightedCount', () => {
    const service = createServiceWithMocks();
    const expected = SKILLS_MOCK.filter((s) => s.highlighted).length;
    expect(service.highlightedCount()).toBe(expected);
  });

  it('should filter by category', () => {
    const service = createServiceWithMocks();
    service.setFilter({ category: 'frontend' });
    const req = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false&category=frontend`);
    req.flush(SKILLS_MOCK.filter((s) => s.category === 'frontend'));
    const filtered = service.filteredSkills();
    expect(filtered.every((s) => s.category === 'frontend')).toBe(true);
  });

  it('should filter by highlighted', () => {
    const service = createServiceWithMocks();
    service.setFilter({ onlyHighlighted: true });
    const req = httpMock.expectOne(`${apiUrl}?onlyHighlighted=true`);
    req.flush(SKILLS_MOCK.filter((s) => s.highlighted));
    const filtered = service.filteredSkills();
    expect(filtered.every((s) => s.highlighted)).toBe(true);
  });

  it('should filter by category and highlighted combined', () => {
    const service = createServiceWithMocks();
    service.setFilter({ category: 'frontend', onlyHighlighted: true });
    const req = httpMock.expectOne(`${apiUrl}?onlyHighlighted=true&category=frontend`);
    req.flush(SKILLS_MOCK.filter((s) => s.category === 'frontend' && s.highlighted));
    const filtered = service.filteredSkills();
    expect(filtered.every((s) => s.category === 'frontend' && s.highlighted)).toBe(true);
  });

  it('should update only the provided filter property', () => {
    const service = createServiceWithMocks();
    service.setFilter({ category: 'frontend' });
    const req1 = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false&category=frontend`);
    req1.flush(SKILLS_MOCK.filter((s) => s.category === 'frontend'));
    service.setFilter({ onlyHighlighted: true });
    const req2 = httpMock.expectOne(`${apiUrl}?onlyHighlighted=true&category=frontend`);
    req2.flush(SKILLS_MOCK.filter((s) => s.category === 'frontend' && s.highlighted));
    expect(service.filter().category).toBe('frontend');
    expect(service.filter().onlyHighlighted).toBe(true);
  });

  it('should reset filter to default', () => {
    const service = createServiceWithMocks();
    service.setFilter({ category: 'frontend', onlyHighlighted: true });
    const req1 = httpMock.expectOne(`${apiUrl}?onlyHighlighted=true&category=frontend`);
    req1.flush(SKILLS_MOCK.filter((s) => s.category === 'frontend' && s.highlighted));
    service.resetFilter();
    const req2 = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false`);
    req2.flush(SKILLS_MOCK);
    expect(service.filter().category).toBe('all');
    expect(service.filter().onlyHighlighted).toBe(false);
  });

  it('should show first page of skills after reset', () => {
    const service = createServiceWithMocks();
    service.setFilter({ category: 'frontend' });
    const req1 = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false&category=frontend`);
    req1.flush(SKILLS_MOCK.filter((s) => s.category === 'frontend'));
    service.resetFilter();
    const req2 = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false`);
    req2.flush(SKILLS_MOCK);
    expect(service.filteredSkills()).toHaveLength(service.PAGE_SIZE);
  });

  it('should toggle highlight on a skill', () => {
    const service = createServiceWithMocks();
    const skill = SKILLS_MOCK[0];
    const before = service.skills().find((s) => s.id === skill.id)!.highlighted;
    service.toggleHighlight(skill.id);
    const after = service.skills().find((s) => s.id === skill.id)!.highlighted;
    expect(after).toBe(!before);
  });

  it('should not mutate original array on toggleHighlight', () => {
    const service = createServiceWithMocks();
    const before = service.skills();
    service.toggleHighlight(SKILLS_MOCK[0].id);
    const after = service.skills();
    expect(before).not.toBe(after);
  });

  it('should not affect other skills when toggling one', () => {
    const service = createServiceWithMocks();
    const targetId = SKILLS_MOCK[0].id;
    const othersBefore = service
      .skills()
      .filter((s) => s.id !== targetId)
      .map((s) => s.highlighted);

    service.toggleHighlight(targetId);

    const othersAfter = service
      .skills()
      .filter((s) => s.id !== targetId)
      .map((s) => s.highlighted);

    expect(othersBefore).toEqual(othersAfter);
  });

  it('should be created and fetch skills', () => {
    const service = TestBed.inject(SkillsService);
    const skillsReq = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false`);
    skillsReq.flush(SKILLS_MOCK);
    const categoriesReq = httpMock.expectOne(`${apiUrl}/categories`);
    categoriesReq.flush(['frontend', 'backend']);

    expect(service).toBeTruthy();
    expect(service.skills()).toHaveLength(SKILLS_MOCK.length);
    expect(service.error()).toBeNull();
  });

  it('should handle error when API fails', () => {
    const service = TestBed.inject(SkillsService);
    const skillsReq = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false`);
    const categoriesReq = httpMock.expectOne(`${apiUrl}/categories`);
    categoriesReq.flush(['frontend']);

    skillsReq.flush('Error del servidor', { status: 500, statusText: 'Server Error' });

    expect(service.loading()).toBe(false);
    expect(service.error()).toBe(
      'No se pudieron cargar las habilidades. Inténtalo de nuevo más tarde.',
    );
    expect(service.skills()).toHaveLength(0);
  });

  it('should toggle highlight locally (optimistic update)', () => {
    const service = TestBed.inject(SkillsService);
    const skillsReq = httpMock.expectOne(`${apiUrl}?onlyHighlighted=false`);
    skillsReq.flush(SKILLS_MOCK);
    const categoriesReq = httpMock.expectOne(`${apiUrl}/categories`);
    categoriesReq.flush(['frontend']);

    const skillId = SKILLS_MOCK[0].id;
    const initialState = service.skills().find((s) => s.id === skillId)!.highlighted;

    service.toggleHighlight(skillId);

    const newState = service.skills().find((s) => s.id === skillId)!.highlighted;
    expect(newState).toBe(!initialState);
  });
});

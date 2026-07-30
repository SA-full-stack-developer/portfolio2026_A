import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LanguageService } from '@core/services/language.service';
import { SeoService } from '@core/services/seo.service';
import { App } from './app';

// Mock loader
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      SKILLS: {
        TITLE: 'Stack Tecnológico',
        SUBTITLE_ALL: '{{filtered}} de {{total}} tecnologías',
        SUBTITLE_HIGHLIGHTED: '· {{count}} destacadas',
        EMPTY: 'No hay tecnologías en esta categoría.',
        CATEGORIES: {
          ALL: 'Todos',
          FRONTEND: 'Frontend',
          BACKEND: 'Backend',
          MOBILE: 'Mobile',
          DEVOPS: 'DevOps',
          TOOLS: 'Herramientas',
        },
        FILTER: { HIGHLIGHTED: 'Destacados' },
        LEVELS: { EXPERT: 'Experto', INTERMEDIATE: 'Intermedio', BEGINNER: 'Básico' },
        YEARS_ONE: '{{count}} año de experiencia',
        YEARS_OTHER: '{{count}} años de experiencia',
      },
    } as TranslationObject);
  }
}

const mockSeoService = {
  init: jest.fn(),
  update: jest.fn(),
  updateSchemas: jest.fn(),
};

describe('App', () => {
  let languageService: LanguageService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: SeoService, useValue: mockSeoService },
      ],
    }).compileComponents();

    languageService = TestBed.inject(LanguageService);
    httpMock = TestBed.inject(HttpTestingController);
    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  afterEach(() => {
    httpMock.verify();
  });

  function createStableFixture() {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    httpMock.match(() => true).forEach((req) => req.flush({ data: { status: 'Online' } }));
    return fixture;
  }

  // Creación
  it('should create the app', async () => {
    const fixture = createStableFixture();
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });

  // Inicialización del idioma
  it('should set a valid language after init', async () => {
    createStableFixture();
    expect(['es', 'en']).toContain(languageService.currentLang());
  });

  it('should persist language in localStorage after init', async () => {
    createStableFixture();
    expect(localStorage.getItem('lang')).not.toBeNull();
  });

  it('should render router outlet', async () => {
    const fixture = createStableFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    const outlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(outlet).toBeTruthy();
  });
});

import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TranslationObject } from '@ngx-translate/core'; // ✅ TranslationObject
import { LanguageService } from './language.service';

// Mock loader para tests — no necesita archivos JSON reales
class MockTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of({
      SKILLS: { TITLE: lang === 'es' ? 'Tecnologías' : 'Technologies' },
    } as TranslationObject);
  }
}

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });
    service = TestBed.inject(LanguageService);
    jest.spyOn(service['translateService'], 'getBrowserLang').mockReturnValue('es');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with default language after init', () => {
    service.init();
    expect(service.currentLang()).toBe('es');
  });

  it('should change language', () => {
    service.setLanguage('en');
    expect(service.currentLang()).toBe('en');
  });

  it('should persist language in localStorage', () => {
    service.setLanguage('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('should toggle language', () => {
    service.setLanguage('es');
    service.toggle();
    expect(service.currentLang()).toBe('en');
    service.toggle();
    expect(service.currentLang()).toBe('es');
  });

  it('should set lang attribute on html element', () => {
    service.setLanguage('en');
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  it('should use saved language from localStorage', () => {
    localStorage.setItem('lang', 'en');
    service.init();
    expect(service.currentLang()).toBe('en');
  });
});

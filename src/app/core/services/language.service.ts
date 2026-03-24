import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
  FALLBACK_LANGUAGE,
  Language,
  LanguageOption,
} from '@core/models/language.model';

import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translateService = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly _currentLang = signal<Language>(DEFAULT_LANGUAGE);

  readonly currentLang = this._currentLang.asReadonly();
  readonly availableLanguages = AVAILABLE_LANGUAGES;

  readonly currentLanguageOption = computed<LanguageOption>(
    () => AVAILABLE_LANGUAGES.find((l) => l.code === this._currentLang()) ?? AVAILABLE_LANGUAGES[0],
  );

  init(): void {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setFallbackLang(FALLBACK_LANGUAGE);

    if (this.isBrowser) {
      const savedLang = this.isBrowser ? (localStorage.getItem('lang') as Language | null) : null;
      const browserLang = this.translateService.getBrowserLang();
      const detectedLang: Language = browserLang === 'es' ? 'es' : 'en';
      const langToUse = savedLang ?? detectedLang;
      this.setLanguage(langToUse);
    } else {
      this.setLanguage(DEFAULT_LANGUAGE);
    }
  }

  setLanguage(lang: Language): void {
    this.translateService.use(lang);
    this._currentLang.set(lang);

    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
      document.documentElement.setAttribute('lang', lang);
    }
  }

  toggle(): void {
    const next = this._currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(next);
  }
}

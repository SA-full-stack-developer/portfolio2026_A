import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AVAILABLE_LANGUAGES } from '@core/models/language.model';
import { LanguageService } from '@core/services/language.service';
import { LanguageSwitcherComponent } from './language-switcher.component';

// Mock loader
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({} as TranslationObject);
  }
}

describe('LanguageSwitcherComponent', () => {
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let component: LanguageSwitcherComponent;
  let languageService: LanguageService;

  function createComponent(): void {
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });
    languageService = TestBed.inject(LanguageService);
  });

  // Creación
  it('should create', () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  // Renderizado de idiomas
  it('should render all configured languages', () => {
    createComponent();
    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    expect(buttons.length).toBe(AVAILABLE_LANGUAGES.length);
  });

  it('should display the correct number of language options', () => {
    createComponent();
    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    expect(buttons.length).toBe(2);
  });

  // Flag y código
  it('should display the correct flag for each language', () => {
    createComponent();
    const flags = fixture.debugElement.queryAll(By.css('.lang-switcher__flag'));
    AVAILABLE_LANGUAGES.forEach((lang, i) => {
      expect(flags[i].nativeElement.textContent.trim()).toBe(lang.flag);
    });
  });

  it('should display the correct code for each language', () => {
    createComponent();
    const codes = fixture.debugElement.queryAll(By.css('.lang-switcher__code'));
    AVAILABLE_LANGUAGES.forEach((lang, i) => {
      expect(codes[i].nativeElement.textContent.trim()).toBe(lang.code.toUpperCase());
    });
  });

  // Clase activa
  it('should mark es button as active on init', () => {
    createComponent();
    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    expect(buttons[0].classes['lang-switcher__btn--active']).toBe(true);
  });

  it('should mark en button as active when language is set to en', () => {
    createComponent();
    languageService.setLanguage('en');
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    expect(buttons[0].classes['lang-switcher__btn--active']).toBeFalsy();
    expect(buttons[1].classes['lang-switcher__btn--active']).toBe(true);
  });

  it('should not mark inactive language button as active', () => {
    createComponent();
    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    expect(buttons[1].classes['lang-switcher__btn--active']).toBeFalsy();
  });

  // Click cambia idioma
  it('should update the selected language when an option is clicked', () => {
    createComponent();
    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    buttons[1].triggerEventHandler('click');
    fixture.detectChanges();

    expect(languageService.currentLang()).toBe('en');
  });

  it('should call setLanguage on service when button is clicked', () => {
    createComponent();
    jest.spyOn(languageService, 'setLanguage');

    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));
    buttons[1].triggerEventHandler('click');

    expect(languageService.setLanguage).toHaveBeenCalledWith('en');
  });

  it('should update active class after language change via click', () => {
    createComponent();
    const buttons = fixture.debugElement.queryAll(By.css('.lang-switcher__btn'));

    buttons[1].triggerEventHandler('click');
    fixture.detectChanges();

    expect(buttons[1].classes['lang-switcher__btn--active']).toBe(true);
    expect(buttons[0].classes['lang-switcher__btn--active']).toBeFalsy();
  });
});

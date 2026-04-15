import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
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
  it('should render active language button', () => {
    createComponent();
    const activeButton = fixture.debugElement.query(By.css('.lang-switcher__active'));
    expect(activeButton).toBeTruthy();
  });

  it('should display the correct flag for active language', () => {
    createComponent();
    const flag = fixture.debugElement.query(By.css('.fi'));
    expect(flag.nativeElement.classList.contains(`fi-${component.currentOption().flag}`)).toBe(
      true,
    );
  });

  it('should display the correct code for active language', () => {
    createComponent();
    const code = fixture.debugElement.query(By.css('.lang-switcher__code'));
    expect(code.nativeElement.textContent.trim()).toBe(
      component.currentOption().code.toUpperCase(),
    );
  });

  // Estado activo
  it('should show dropdown when toggle is called', () => {
    createComponent();
    component.toggle();
    fixture.detectChanges();
    const dropdown = fixture.debugElement.query(By.css('.lang-switcher__dropdown'));
    expect(dropdown).toBeTruthy();
  });

  it('should render other language options when open', () => {
    createComponent();
    component.toggle();
    fixture.detectChanges();
    const options = fixture.debugElement.queryAll(By.css('.lang-switcher__option'));
    expect(options.length).toBe(component.otherLanguages().length);
  });

  // Click cambia idioma
  it('should update the selected language when an option is clicked', () => {
    createComponent();
    component.toggle();
    fixture.detectChanges();
    const options = fixture.debugElement.queryAll(By.css('.lang-switcher__option'));
    options[0].triggerEventHandler('click');
    fixture.detectChanges();

    expect(languageService.currentLang()).toBe('en');
  });

  it('should call setLanguage on service when option is clicked', () => {
    createComponent();
    jest.spyOn(languageService, 'setLanguage');
    component.toggle();
    fixture.detectChanges();

    const options = fixture.debugElement.queryAll(By.css('.lang-switcher__option'));
    options[0].triggerEventHandler('click');

    expect(languageService.setLanguage).toHaveBeenCalledWith('en');
  });

  it('should close dropdown after selecting language', () => {
    createComponent();
    component.toggle();
    fixture.detectChanges();
    expect(component.isOpen()).toBe(true);

    const options = fixture.debugElement.queryAll(By.css('.lang-switcher__option'));
    options[0].triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.isOpen()).toBe(false);
  });
});

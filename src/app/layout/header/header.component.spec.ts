import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      HERO: {
        CTA: {
          CONTACT: 'Contáctame',
        },
      },
    } as TranslationObject);
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should render header logo', async () => {
    await createComponent();
    const logo = fixture.debugElement.query(By.css('app-header-logo'));
    expect(logo).toBeTruthy();
  });

  it('should render header navigation', async () => {
    await createComponent();
    const nav = fixture.debugElement.query(By.css('app-header-nav'));
    expect(nav).toBeTruthy();
  });

  it('should render header hamburger', async () => {
    await createComponent();
    const hamburger = fixture.debugElement.query(By.css('app-header-hamburger'));
    expect(hamburger).toBeTruthy();
  });

  it('should render language switcher', async () => {
    await createComponent();
    const languageSwitcher = fixture.debugElement.query(By.css('app-language-switcher'));
    expect(languageSwitcher).toBeTruthy();
  });

  it('should render hero contact button', async () => {
    await createComponent();
    const heroContactButton = fixture.debugElement.query(By.css('.header__contact'));
    expect(heroContactButton).toBeTruthy();
  });

  it('should have correct text for hero contact button', async () => {
    await createComponent();
    const heroContactButton = fixture.debugElement.query(By.css('.header__contact'));
    expect(heroContactButton.nativeElement.textContent.trim()).toBe('Contáctame');
  });

  it('should have routerLink on hero contact button', async () => {
    await createComponent();
    const heroContactButton = fixture.debugElement.query(By.css('.header__contact'));
    const routerLink = heroContactButton.injector.get(RouterLink);
    expect(routerLink.urlTree.toString()).toBe('/contact');
  });
});

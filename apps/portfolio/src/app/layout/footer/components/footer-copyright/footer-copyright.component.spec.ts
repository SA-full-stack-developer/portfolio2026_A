import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterCopyrightComponent } from './footer-copyright.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      FOOTER: {
        LEGAL: 'Legal',
      },
    } as TranslationObject);
  }
}

describe('FooterCopyrightComponent', () => {
  let component: FooterCopyrightComponent;
  let fixture: ComponentFixture<FooterCopyrightComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(FooterCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCopyrightComponent, RouterTestingModule],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    }).compileComponents();

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should expose the current year', async () => {
    await createComponent();
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should render the legal router link and translated text', async () => {
    await createComponent();

    const anchor = fixture.nativeElement.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor.textContent).toContain('Legal');
    expect(anchor.getAttribute('routerlink') || anchor.getAttribute('ng-reflect-router-link')).toBe(
      '/legal',
    );
  });
});

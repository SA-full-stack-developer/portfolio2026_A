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
import { FooterContactComponent } from './footer-contact.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      FOOTER: {
        CONTACT_TITLE: 'Contacto',
        CONTACT_SUBTITLE: 'Disponible para proyectos',
        CONTACT_CTA: 'Contáctame',
      },
    } as TranslationObject);
  }
}

describe('FooterContactComponent', () => {
  let component: FooterContactComponent;
  let fixture: ComponentFixture<FooterContactComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(FooterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContactComponent, RouterTestingModule],
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

  it('should render contact title, subtitle and CTA', async () => {
    await createComponent();

    expect(fixture.nativeElement.textContent).toContain('Contacto');
    expect(fixture.nativeElement.textContent).toContain('Disponible para proyectos');
    expect(fixture.nativeElement.textContent).toContain('Contáctame');
  });

  it('should include a routerLink to contact', async () => {
    await createComponent();

    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.getAttribute('routerlink') || button.getAttribute('ng-reflect-router-link')).toBe(
      '/contact',
    );
  });
});

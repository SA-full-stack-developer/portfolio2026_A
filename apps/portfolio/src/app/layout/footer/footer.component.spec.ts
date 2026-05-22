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
import { FooterComponent } from './footer.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      FOOTER: {
        EXPLORE: 'Explorar',
        CONTACT: 'Contacto',
        ABOUT_ME: 'Sobre mí',
        ABOUT_THIS: 'Sobre esto',
        CONTACT_TITLE: 'Contacto',
        CONTACT_SUBTITLE: 'Disponible para proyectos',
        CONTACT_CTA: 'Contáctame',
        SYSTEM_STATUS: 'Estado del sistema',
        AVAILABLE: 'Disponible',
        TEXT: 'Sitio web en línea',
        LEGAL: 'Legal',
      },
    } as TranslationObject);
  }
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, RouterTestingModule],
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

  it('should render the footer container', async () => {
    await createComponent();
    expect(fixture.nativeElement.querySelector('.footer')).toBeTruthy();
  });

  it('should render footer child sections', async () => {
    await createComponent();

    expect(fixture.nativeElement.querySelector('app-footer-information')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-footer-links')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-footer-contact')).toBeTruthy();
  });
});

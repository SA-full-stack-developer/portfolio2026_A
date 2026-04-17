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
import { FooterLinksComponent } from './footer-links.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      FOOTER: {
        EXPLORE: 'Explorar',
        CONTACT: 'Contacto',
        ABOUT_ME: 'Sobre mí',
        ABOUT_THIS: 'Sobre esto',
        LOOK_404: 'Página 404',
      },
    } as TranslationObject);
  }
}

describe('FooterLinksComponent', () => {
  let component: FooterLinksComponent;
  let fixture: ComponentFixture<FooterLinksComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(FooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLinksComponent, RouterTestingModule],
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

  it('should render the expected navigation links', async () => {
    await createComponent();
    const anchors = fixture.nativeElement.querySelectorAll('a');

    expect(anchors.length).toBe(10);
    expect(anchors[0].textContent.trim()).toBe('Home');
    expect(anchors[1].textContent.trim()).toBe('Contacto');
    expect(anchors[4].textContent.trim()).toBe('Sobre esto');
  });

  it('should render social and external links with href values', async () => {
    await createComponent();
    const anchors = Array.from(fixture.nativeElement.querySelectorAll('a')) as HTMLAnchorElement[];

    expect(anchors.some((link) => link.href.includes('github.com'))).toBe(true);
    expect(anchors.some((link) => link.href.includes('linkedin.com'))).toBe(true);
    expect(anchors.some((link) => link.href.includes('livingmanga.com'))).toBe(true);
    expect(anchors.some((link) => link.href.includes('instagram.com'))).toBe(true);
  });

  it('should render the 404 link text from translations', async () => {
    await createComponent();

    expect(fixture.nativeElement.textContent).toContain('Página 404');
  });
});

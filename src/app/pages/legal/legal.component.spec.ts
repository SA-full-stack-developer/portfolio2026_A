import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { LegalComponent } from './legal.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      LEGAL: {
        TITLE: 'Aviso Legal',
        SECTION_1_TITLE: 'Propiedad intelectual',
        SECTION_1_BODY: 'Todo el contenido es propiedad del autor.',
        SECTION_2_TITLE: 'Responsabilidad',
        SECTION_2_BODY: 'No nos hacemos responsables de daños indirectos.',
        SECTION_3_TITLE: 'Privacidad',
        SECTION_3_BODY: 'Los datos se tratan conforme a la normativa vigente.',
      },
    } as TranslationObject);
  }
}

describe('LegalComponent', () => {
  let component: LegalComponent;
  let fixture: ComponentFixture<LegalComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(LegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalComponent],
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

  it('should render the main legal title', async () => {
    await createComponent();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Aviso Legal');
  });

  it('should render three legal sections with headings and text', async () => {
    await createComponent();

    const headings = fixture.nativeElement.querySelectorAll('h3');
    const paragraphs = fixture.nativeElement.querySelectorAll('p');

    expect(headings.length).toBe(3);
    expect(paragraphs.length).toBe(3);
    expect(headings[0].textContent).toContain('Propiedad intelectual');
    expect(headings[1].textContent).toContain('Responsabilidad');
    expect(headings[2].textContent).toContain('Privacidad');
    expect(paragraphs[0].textContent).toContain('Todo el contenido es propiedad del autor.');
    expect(paragraphs[1].textContent).toContain('No nos hacemos responsables de daños indirectos.');
    expect(paragraphs[2].textContent).toContain(
      'Los datos se tratan conforme a la normativa vigente.',
    );
  });
});

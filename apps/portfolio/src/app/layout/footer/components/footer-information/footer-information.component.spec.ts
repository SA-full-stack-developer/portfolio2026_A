import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { StatusService } from '@core/services/status.service';
import { FooterInformationComponent } from './footer-information.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      FOOTER: {
        SYSTEM_STATUS: 'Estado del sistema',
        AVAILABLE: 'Disponible',
        TEXT: 'Sitio web en línea',
      },
    } as TranslationObject);
  }
}

class MockStatusService {
  status = () => 'Online';
}

describe('FooterInformationComponent', () => {
  let component: FooterInformationComponent;
  let fixture: ComponentFixture<FooterInformationComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(FooterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterInformationComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: StatusService, useClass: MockStatusService },
      ],
    }).compileComponents();

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should render brand name and status text', async () => {
    await createComponent();
    expect(fixture.nativeElement.textContent).toContain('CRISTIANSALCEDO');
    expect(fixture.nativeElement.textContent).toContain('.DEV');
    expect(fixture.nativeElement.textContent).toContain('Online');
  });

  it('should render translated status labels', async () => {
    await createComponent();
    expect(fixture.nativeElement.textContent).toContain('Estado del sistema');
    expect(fixture.nativeElement.textContent).toContain('Disponible');
    expect(fixture.nativeElement.textContent).toContain('Sitio web en línea');
  });

  it('should pass the status signal to app-status-dot', async () => {
    await createComponent();
    const statusDot = fixture.debugElement.query(By.css('app-status-dot'));
    expect(statusDot.componentInstance.status()).toBe('Online');
  });
});

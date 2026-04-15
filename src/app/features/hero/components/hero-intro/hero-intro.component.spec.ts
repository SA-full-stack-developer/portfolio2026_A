import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { Component, provideZonelessChangeDetection } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { HeroIntroComponent } from './hero-intro.component';

@Component({ template: '' })
class DummyComponent {}

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      HERO: {
        GREETING: 'Hola, soy',
        NAME: 'Tu Nombre',
        DESCRIPTION: 'Desarrollador Frontend apasionado por crear experiencias web excepcionales.',
        ROLE: 'Desarrollador Frontend',
        CTA: {
          CONTACT: 'Contáctame',
          STACK: 'Ver Stack',
        },
        TITLE: 'Introducción',
      },
    } as TranslationObject);
  }
}

describe('HeroIntroComponent', () => {
  let component: HeroIntroComponent;
  let fixture: ComponentFixture<HeroIntroComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeroIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HeroIntroComponent,
        RouterTestingModule.withRoutes([{ path: 'contact', component: DummyComponent }]),
      ],
      providers: [
        provideZonelessChangeDetection(),
        { provide: PlatformService, useValue: { isBrowser: true } },
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

  it('should have scrollToSkills method defined', async () => {
    await createComponent();
    expect(component.scrollToSkills).toBeDefined();
  });

  it('should have navigateToContact method defined', async () => {
    await createComponent();
    expect(component.navigateToContact).toBeDefined();
  });

  it('should call scrollToSkills when scrollToSkills is invoked', async () => {
    await createComponent();
    jest.spyOn(component, 'scrollToSkills');
    component.scrollToSkills();
    expect(component.scrollToSkills).toHaveBeenCalled();
  });

  it('should call navigateToContact when navigateToContact is invoked', async () => {
    await createComponent();
    jest.spyOn(component, 'navigateToContact');
    component.navigateToContact();
    expect(component.navigateToContact).toHaveBeenCalled();
  });

  it('should navigate to contact page when navigateToContact is called', async () => {
    await createComponent();
    const router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate');
    component.navigateToContact();
    expect(router.navigate).toHaveBeenCalledWith(['/contact']);
  });

  it('should scroll to skills section when scrollToSkills is called', async () => {
    await createComponent();
    jest.spyOn(document, 'getElementById').mockReturnValue(document.createElement('div'));
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    let rafCallCount = 0;
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      if (rafCallCount++ < 1) cb(0);
      return 0;
    });
    component.scrollToSkills();
    expect(document.getElementById).toHaveBeenCalledWith('skills');
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('should not navigate to contact on non-browser platforms', async () => {
    await createComponent();
    (component as any).platformService.isBrowser = false;
    const router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate');
    component.navigateToContact();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should animate cards on view init', async () => {
    await createComponent();
    const gsapService = TestBed.inject(GsapService);
    jest.spyOn(gsapService.gsap, 'from').mockImplementation(() => ({}) as any);
    component.ngAfterViewInit();
    expect(gsapService.gsap.from).toHaveBeenCalled();
  });
});

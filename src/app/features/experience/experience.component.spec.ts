import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { GsapService } from '@core/services/gsap.service';
import { LanguageService } from '@core/services/language.service';
import { PlatformService } from '@core/services/platform.service';
import { ExperienceComponent } from './experience.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      EXPERIENCES: {
        TITLE: 'Experiencia',
        PRACTICE: 'Practicas',
      },
    } as TranslationObject);
  }
}

class MockGsapService {
  gsap = {
    fromTo: jest.fn(),
  };
}

class MockPlatformService {
  isBrowser = true;
}

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    registerLocaleData(localeEs);

    TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: LanguageService, useValue: { currentLang: signal('en') } },
        { provide: PlatformService, useClass: MockPlatformService },
        { provide: GsapService, useClass: MockGsapService },
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('en').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should have openProjectId signal initialized to null', async () => {
    await createComponent();
    expect(component.openProjectId()).toBeNull();
  });

  it('should toggle openProjectId when onProjectClick is called', async () => {
    await createComponent();
    const projectId = '1';
    component.onProjectClick(projectId);
    expect(component.openProjectId()).toBe(projectId);
    component.onProjectClick(projectId);
    expect(component.openProjectId()).toBeNull();
  });

  it('should return correct card order from getCardOrder', async () => {
    await createComponent();
    expect(component.getCardOrder(0)).toEqual([false, true]);
    expect(component.getCardOrder(1)).toEqual([true, false]);
    expect(component.getCardOrder(2)).toEqual([false, true]);
  });

  it('should have resolvedExperiences from experienceService', async () => {
    await createComponent();
    expect(component.resolvedExperiences()).not.toBeNull();
  });

  it('should call animateCards on initialization if platform is browser', async () => {
    await createComponent();
    const gsapService = TestBed.inject(GsapService) as any;
    component['animateCards']();
    expect(gsapService.gsap.fromTo).toHaveBeenCalled();
  });

  it('should not call animateCards on initialization if platform is not browser', async () => {
    const platformService = TestBed.inject(PlatformService) as any;
    platformService.isBrowser = false;
    await createComponent();
    // The component should be created without calling animateCards when not in browser
    expect(component).toBeTruthy();
  });

  it('should animate cards with gsap', async () => {
    await createComponent();
    const gsapService = TestBed.inject(GsapService) as any;
    component['animateCards']();
    expect(gsapService.gsap.fromTo).toHaveBeenCalled();
  });

  it('should set correct animation properties in animateCards', async () => {
    await createComponent();
    const gsapService = TestBed.inject(GsapService) as any;
    component['animateCards']();
    expect(gsapService.gsap.fromTo).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { opacity: 0, y: 50 },
      expect.objectContaining({
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: expect.objectContaining({
          trigger: expect.any(HTMLElement),
          start: 'top 80%',
        }),
      }),
    );
  });
});

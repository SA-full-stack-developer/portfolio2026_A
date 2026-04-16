import { provideZonelessChangeDetection, signal } from '@angular/core';
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
import { ResolvedExperience } from '@core/models/experience.model';
import { Skill } from '@core/models/skill.model';
import { ExperienceService } from '@core/services/experience.service';
import { GsapService } from '@core/services/gsap.service';
import { LanguageService } from '@core/services/language.service';
import { PlatformService } from '@core/services/platform.service';
import { EXPERIENCES_MOCK } from '../../core/mocks/experiences.mock';
import { ExperienceComponent } from './experience.component';

const MOCK_SKILL: Skill = {
  id: '1',
  name: 'Angular',
  level: 3,
  category: 'frontend',
  icon: 'angular',
  highlighted: true,
  yearsOfExperience: 2,
};

const RESOLVED_EXPERIENCES_MOCK: ResolvedExperience[] = EXPERIENCES_MOCK.map((exp) => ({
  ...exp,
  skills: [MOCK_SKILL],
  projects: [],
  company: undefined,
}));

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

class MockExperienceService {
  experiences = signal(RESOLVED_EXPERIENCES_MOCK);
  loading = signal(false);
  error = signal(null);
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
        { provide: ExperienceService, useClass: MockExperienceService },
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

  it('should not call animateCards on initialization if platform is not browser', async () => {
    const platformService = TestBed.inject(PlatformService) as any;
    platformService.isBrowser = false;
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should call gsap fromTo if there are cards in the DOM', async () => {
    const gsapService = TestBed.inject(GsapService) as any;

    await createComponent();
    const cards = fixture.nativeElement.querySelectorAll('.experience-card');
    component['animateCards']();
    expect(gsapService.gsap.fromTo).toHaveBeenCalled();
  });
});

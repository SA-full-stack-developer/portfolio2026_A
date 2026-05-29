import { provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { GsapService, PlatformService } from '@shared-libs/services';
import { Observable, of } from 'rxjs';

import { SKILLS_MOCK } from '@core/mocks/skills.mock';
import { ExperienceService } from '@core/services/experience.service';
import { LanguageService } from '@core/services/language.service';
import { ResolvedExperience } from '@portfolio/shared/models';
import { COMPANIES_MOCK } from '../../core/mocks/companies.mock';
import { EXPERIENCES_MOCK } from '../../core/mocks/experiences.mock';
import { PROJECTS_MOCK } from '../../core/mocks/projects.mock';
import { ExperienceComponent } from './experience.component';

const RESOLVED_EXPERIENCES_MOCK: ResolvedExperience[] = EXPERIENCES_MOCK.map((exp) => ({
  ...exp,
  skills: [SKILLS_MOCK[0]], // Use first skill from mock
  projects: PROJECTS_MOCK.filter((project) => exp.projectIds.includes(project.id)),
  company: COMPANIES_MOCK.find((company) => company.id === exp.companyId),
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
    set: jest.fn(),
    to: jest.fn().mockReturnValue({ scrollTrigger: null }),
    fromTo: jest.fn().mockImplementation(() => ({
      scrollTrigger: { kill: jest.fn() },
    })),
  };
  scrollTrigger = {
    refresh: jest.fn(),
  };
  init = jest.fn();
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
    component['animateCards']();
    expect(gsapService.gsap.fromTo).toHaveBeenCalled();
  });

  it('should push scrollTriggers from GSAP and kill them on destroy', async () => {
    await createComponent();
    if (component['scrollTriggers'].length === 0) {
      component['animateCards']();
    }

    const triggers = component['scrollTriggers'] as { kill: jest.Mock }[];
    expect(triggers.length).toBeGreaterThan(0);

    const killMocks = triggers.map((st) => st.kill);
    fixture.destroy();

    killMocks.forEach((kill) => {
      expect(kill).toHaveBeenCalled();
    });
  });
});

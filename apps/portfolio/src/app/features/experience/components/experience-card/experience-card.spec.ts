import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { COMPANIES_MOCK } from '@core/mocks/companies';
import { PROJECTS_MOCK } from '@core/mocks/projects';
import { SKILLS_MOCK } from '@core/mocks/skills';
import { ResolvedExperience } from '@portfolio/shared/models';
import { ExperienceCardComponent } from './experience-card';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      EXPERIENCES: {
        CURRENT: 'Actual',
        ROLES: {
          TITLE: 'Roles',
        },
      },
    } as TranslationObject);
  }
}

const mockExperience: ResolvedExperience = {
  id: '1',
  companyId: '1',
  roles: ['Developer'],
  description: 'Worked on various projects',
  technologyIds: ['1', '2'],
  projectIds: ['1', '2'],
  showCompany: true,
  company: COMPANIES_MOCK.find((company) => company.id === '1'),
  projects: PROJECTS_MOCK.filter((project) => ['1', '2'].includes(project.id)),
  skills: [SKILLS_MOCK[0]],
};

describe('ExperienceCardComponent', () => {
  let component: ExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceCardComponent>;

  async function createComponent(
    showProjects: boolean,
    experience: ResolvedExperience,
    openProjectId: string | null = null,
  ): Promise<void> {
    fixture = TestBed.createComponent(ExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('showProjects', showProjects);
    fixture.componentRef.setInput('experience', experience);
    fixture.componentRef.setInput('openProjectId', openProjectId);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ExperienceCardComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent(false, mockExperience);
    expect(component).toBeTruthy();
  });

  it('should update selectedSkill when onTechClick is called', async () => {
    const experience: ResolvedExperience = {
      ...mockExperience,
      skills: [SKILLS_MOCK[0], SKILLS_MOCK[1]],
    };
    await createComponent(true, experience);

    expect(component.selectedSkill()).toEqual(SKILLS_MOCK[0]);

    component.onTechClick(SKILLS_MOCK[1]);

    expect(component.selectedSkill()).toEqual(SKILLS_MOCK[1]);
  });

  it('should emit projectClick when onProjectClick is called', async () => {
    await createComponent(true, mockExperience);

    const emitted: string[] = [];
    const subscription = component.projectClick.subscribe((id) => emitted.push(id));

    component.onProjectClick('1');

    expect(emitted).toEqual(['1']);
    subscription.unsubscribe();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResolvedExperience } from '@core/models/experience.model';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { ExperienceCardComponent } from './experience-card.component';

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
  company: undefined,
  projects: [],
  skills: [
    {
      id: 'skill1',
      name: 'Test Skill',
      level: 1,
      category: 'tools',
      icon: 'test-icon',
      highlighted: false,
      yearsOfExperience: 1,
    },
  ],
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
});

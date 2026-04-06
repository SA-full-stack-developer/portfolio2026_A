import { Injectable, computed, signal } from '@angular/core';
import { Experience, ResolvedExperience } from '@core/models/experience.model';

import { COMPANIES_DATA } from '@core/data/companies.data';
import { EXPERIENCES_DATA } from '@core/data/experiences.data';
import { PROJECTS_DATA } from '@core/data/projects.data';
import { SKILLS_DATA } from '@core/data/skills.data';
import { Company } from '@core/models/company.model';
import { Project } from '@core/models/project.model';
import { Skill } from '@core/models/skill.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly _experiences = signal<Experience[]>(EXPERIENCES_DATA);

  readonly experiences = this._experiences.asReadonly();

  getCompany(companyId: string): Company | undefined {
    return COMPANIES_DATA.find((c) => c.id === companyId);
  }

  getProjects(projectIds: string[]): Project[] {
    if (!projectIds?.length) return [];
    return PROJECTS_DATA.filter((p) => projectIds.includes(p.id));
  }

  getSkillsByName(names: string[]): Skill[] {
    return SKILLS_DATA.filter((s) => names.includes(s.name));
  }

  readonly resolvedExperiences = computed<ResolvedExperience[]>(() =>
    this._experiences().map((exp) => ({
      ...exp,
      company: this.getCompany(exp.companyId),
      projects: this.getProjects(exp.projectIds),
      skills: this.getSkillsByName(exp.technologyIds),
    })),
  );
}

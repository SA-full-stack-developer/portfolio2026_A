import { Company } from './company.model';
import { Project } from './project.model';
import { Skill } from './skill.model';

export interface Experience {
  id: string;
  companyId: string;
  roles: string[];
  description: string;
  technologyIds: string[];
  projectIds: string[];
  showCompany: boolean;
  dates?: Dates[];
  startDate?: Date;
  endDate?: Date | null;
}

export interface ResolvedExperience extends Omit<Experience, 'technologyIds' | 'projectIds'> {
  company: Company | undefined;
  projects: Project[];
  skills: Skill[];
}

export interface Dates {
  startDate: Date;
  endDate: Date | null;
}

export function isCurrentJob(experience: Experience): boolean {
  if (experience.dates && experience.dates.length > 0) {
    return experience.dates[experience.dates.length - 1].endDate === null;
  }
  return experience.endDate === null;
}

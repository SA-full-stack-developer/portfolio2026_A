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

export interface ResolvedExperience extends Experience {
  company: Company | undefined;
  projects: Project[];
  skills: Skill[];
}

export interface Dates {
  startDate: Date;
  endDate: Date | null;
}

export function isCurrentJob(experience: Experience): boolean {
  return experience.endDate === null;
}

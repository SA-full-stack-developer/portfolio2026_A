import { Company } from './company';
import { Project } from './project';
import { Skill } from './skill';

export interface Dates {
  startDate: Date;
  endDate: Date | null;
}

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

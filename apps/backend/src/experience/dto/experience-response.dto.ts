import { Company, Experience, Project, Skill } from '@portfolio/shared/models';

export class ExperienceResponseDto implements Experience {
  id!: string;
  companyId!: string;
  roles!: string[];
  description!: string;
  technologyIds!: string[];
  projectIds!: string[];
  showCompany!: boolean;
  dates?: { startDate: Date; endDate: Date | null }[];
  startDate?: Date;
  endDate?: Date | null;
  company?: Company;
  projects!: Project[];
  skills!: Skill[];
}
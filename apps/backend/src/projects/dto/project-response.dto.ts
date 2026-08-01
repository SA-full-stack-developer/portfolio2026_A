import { Company, Project } from '@portfolio/shared/models';

export class ProjectResponseDto implements Project {
  id!: string;
  name!: string;
  description!: string;
  companyId!: string;
  company?: Company;
}

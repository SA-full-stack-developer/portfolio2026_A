import { Company } from './company.model';

export interface Project {
  id: string;
  name: string;
  description: string;
  companyId: string;
}

export interface ResolvedProject extends Omit<Project, 'companyId'> {
  company: Company | undefined;
}

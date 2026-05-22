import { Company } from '../../companies/entities/company.entity';
import { Project } from '../entities/project.entity';

export class ProjectResponseDto extends Project {
  company?: Company;
}

import { Injectable, NotFoundException } from '@nestjs/common';

import { CompaniesService } from '../companies/companies.service';
import { PROJECTS_DATA } from './data/projects.data';
import { ProjectResponseDto } from './dto/project-response.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(private readonly companiesService: CompaniesService) {}

  private projects: Project[] = PROJECTS_DATA;

  findAll(): ProjectResponseDto[] {
    return this.projects.map((project) => {
      return this.getProjectResponseDto(project);
    });
  }

  findOne(id: string): ProjectResponseDto {
    const project = this.projects.find((p) => p.id === id);
    if (!project) throw new NotFoundException(`Project ${id} not found`);

    return this.getProjectResponseDto(project);
  }

  findByIds(ids: string[]): ProjectResponseDto[] {
    const projects = this.projects.filter((p) => ids.includes(p.id));
    return projects.map((project) => {
      return this.getProjectResponseDto(project);
    });
  }

  private getProjectResponseDto(project: Project): ProjectResponseDto {
    return {
      ...project,
      company: this.companiesService.findOne(project.companyId),
    };
  }
}

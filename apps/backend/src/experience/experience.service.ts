import { Injectable, NotFoundException } from '@nestjs/common';

import { CompaniesService } from '../companies/companies.service';
import { ProjectsService } from '../projects/projects.service';
import { SkillsService } from '../skills/skills.service';
import { EXPERIENCES_DATA } from './data/experiences.data';
import { ExperienceResponseDto } from './dto/experience-response.dto';
import { Experience } from './entities/experience.entity';

@Injectable()
export class ExperienceService {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly projectsService: ProjectsService,
    private readonly skillsService: SkillsService,
  ) {}

  private experiences: Experience[] = EXPERIENCES_DATA;

  findAll(): ExperienceResponseDto[] {
    return this.experiences.map((experience) => {
      return this.getExperienceResponseDto(experience);
    });
  }

  findOne(id: string): ExperienceResponseDto {
    const experience = this.experiences.find((e) => e.id === id);
    if (!experience) throw new NotFoundException(`Experience ${id} not found`);

    return this.getExperienceResponseDto(experience);
  }

  private getExperienceResponseDto(
    experience: Experience,
  ): ExperienceResponseDto {
    return {
      ...experience,
      projects: this.projectsService.findByIds(experience.projectIds) ?? [],
      company: this.companiesService.findOne(experience.companyId),
      skills: this.skillsService.findByIds(experience.technologyIds) ?? [],
    };
  }
}

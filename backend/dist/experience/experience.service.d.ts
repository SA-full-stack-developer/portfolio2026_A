import { CompaniesService } from "../companies/companies.service";
import { ProjectsService } from "../projects/projects.service";
import { SkillsService } from "../skills/skills.service";
import { ExperienceResponseDto } from './dto/experience-response.dto';
export declare class ExperienceService {
    private readonly companiesService;
    private readonly projectsService;
    private readonly skillsService;
    constructor(companiesService: CompaniesService, projectsService: ProjectsService, skillsService: SkillsService);
    private experiences;
    findAll(): ExperienceResponseDto[];
    findOne(id: string): ExperienceResponseDto;
    private getExperienceResponseDto;
}

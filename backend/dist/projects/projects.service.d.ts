import { CompaniesService } from "../companies/companies.service";
import { ProjectResponseDto } from './dto/project-response.dto';
export declare class ProjectsService {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    private projects;
    findAll(): ProjectResponseDto[];
    findOne(id: string): ProjectResponseDto;
    findByIds(ids: string[]): ProjectResponseDto[];
    private getProjectResponseDto;
}

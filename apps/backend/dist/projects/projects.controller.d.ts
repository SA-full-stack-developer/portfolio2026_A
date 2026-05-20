import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): import("./dto/project-response.dto").ProjectResponseDto[];
    findOne(id: string): import("./dto/project-response.dto").ProjectResponseDto;
}

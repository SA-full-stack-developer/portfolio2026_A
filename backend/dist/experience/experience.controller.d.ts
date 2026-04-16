import { ExperienceService } from './experience.service';
export declare class ExperienceController {
    private readonly experienceService;
    constructor(experienceService: ExperienceService);
    findAll(): import("./dto/experience-response.dto").ExperienceResponseDto[];
    findOne(id: string): import("./dto/experience-response.dto").ExperienceResponseDto;
}

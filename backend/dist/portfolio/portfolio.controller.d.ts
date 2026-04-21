import { ExperienceService } from '../experience/experience.service';
import { SkillsService } from '../skills/skills.service';
export declare class PortfolioController {
    private readonly skillsService;
    private readonly experienceService;
    constructor(skillsService: SkillsService, experienceService: ExperienceService);
    getPortfolioData(): Promise<{
        skills: import("../skills/entities/skill.entity").Skill[];
        experience: import("../experience/dto/experience-response.dto").ExperienceResponseDto[];
        timestamp: Date;
    }>;
}

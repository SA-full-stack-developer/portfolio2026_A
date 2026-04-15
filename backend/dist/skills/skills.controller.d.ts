import { SkillsService } from './skills.service';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    findAll(category?: string, onlyHighlighted?: string): import("./entities/skill.entity").Skill[];
    findAllCategories(): string[];
}

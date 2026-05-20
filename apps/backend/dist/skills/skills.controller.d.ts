import { SkillsService } from './skills.service';
export declare class SkillsController {
    readonly skillsService: SkillsService;
    constructor(skillsService: SkillsService);
    findAll(category?: string, onlyHighlighted?: string): import("./entities/skill.entity").Skill[];
    findAllCategories(): string[];
}

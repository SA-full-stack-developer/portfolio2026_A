import { Skill } from './entities/skill.entity';
export declare class SkillsService {
    private skills;
    findAll(category?: string, onlyHighlighted?: boolean): Skill[];
    getCategories(): string[];
}

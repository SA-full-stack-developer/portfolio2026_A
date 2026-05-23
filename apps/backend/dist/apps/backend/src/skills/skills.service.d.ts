import { Skill } from "../../../../libs/shared/models/src/index.ts";
export declare class SkillsService {
    private skills;
    findAll(category?: string, onlyHighlighted?: boolean): Skill[];
    getCategories(): string[];
    findByIds(ids: string[]): Skill[];
    getHighlightedCount(): number;
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'tools' | 'soft';
export type SkillLevel = 'beginner' | 'intermediate' | 'expert';
export interface Skill {
    id: string;
    name: string;
    level: number;
    category: SkillCategory;
    icon: string;
    highlighted: boolean;
    yearsOfExperience: number;
}

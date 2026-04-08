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

export interface SkillFilter {
  category: SkillCategory | 'all';
  onlyHighlighted: boolean;
}

export function getSkillLevel(level: number): SkillLevel {
  if (level >= 80) return 'expert';
  if (level >= 50) return 'intermediate';
  return 'beginner';
}

export const SKILL_LEVEL_LABEL: Record<SkillLevel, string> = {
  expert: 'Experto',
  intermediate: 'Intermedio',
  beginner: 'Básico',
};

import { Injectable } from '@nestjs/common';
import { SKILLS_DATA } from './data/skills.data';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  private skills: Skill[] = SKILLS_DATA;

  findAll(category?: string, onlyHighlighted?: boolean): Skill[] {
    let filtered = [...this.skills];

    if (category && category !== 'all') {
      filtered = filtered.filter((s) => s.category === category);
    }

    if (onlyHighlighted) {
      filtered = filtered.filter((s) => s.highlighted);
    }

    return filtered.sort((a, b) => {
      if (a.highlighted !== b.highlighted) return a.highlighted ? -1 : 1;
      return b.level - a.level;
    });
  }

  getCategories(): string[] {
    const categories = this.skills.map((s) => s.category);
    return [...new Set(categories)];
  }

  findByIds(ids: string[]): Skill[] {
    return this.skills.filter((s) => ids.includes(s.id));
  }
}

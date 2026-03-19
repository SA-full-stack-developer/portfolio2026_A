import { Injectable, computed, signal } from '@angular/core';
import { Skill, SkillCategory, SkillFilter } from '@core/models/skill.model';

import { SKILLS_DATA } from '@core/data/skills.data';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly _skills = signal<Skill[]>(SKILLS_DATA);
  private readonly _filter = signal<SkillFilter>({
    category: 'all',
    onlyHighlighted: false,
  });

  readonly skills = this._skills.asReadonly();
  readonly filter = this._filter.asReadonly();

  readonly filteredSkills = computed(() => {
    const { category, onlyHighlighted } = this._filter();
    return this._skills().filter((skill) => {
      const matchCategory = category === 'all' || skill.category === category;
      const matchHighlight = !onlyHighlighted || skill.highlighted;
      return matchCategory && matchHighlight;
    });
  });

  readonly categories = computed<SkillCategory[]>(() => {
    const unique = new Set(this._skills().map((s) => s.category));
    return Array.from(unique);
  });

  readonly totalSkills = computed(() => this._skills().length);
  readonly highlightedCount = computed(() => this._skills().filter((s) => s.highlighted).length);

  setFilter(filter: Partial<SkillFilter>): void {
    this._filter.update((current) => ({ ...current, ...filter }));
  }

  resetFilter(): void {
    this._filter.set({ category: 'all', onlyHighlighted: false });
  }

  toggleHighlight(id: string): void {
    this._skills.update((skills) =>
      skills.map((s) => (s.id === id ? { ...s, highlighted: !s.highlighted } : s)),
    );
  }
}

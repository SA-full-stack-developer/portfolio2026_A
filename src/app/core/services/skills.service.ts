import { Injectable, computed, signal } from '@angular/core';
import { Skill, SkillCategory, SkillFilter } from '@core/models/skill.model';

import { SKILLS_DATA } from '@core/data/skills.data';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly PAGE_SIZE = 24;

  private readonly _skills = signal<Skill[]>(SKILLS_DATA);
  private readonly _filter = signal<SkillFilter>({
    category: 'all',
    onlyHighlighted: false,
  });
  private readonly _page = signal<number>(1);

  readonly skills = this._skills.asReadonly();
  readonly filter = this._filter.asReadonly();
  readonly page = this._page.asReadonly();

  readonly allFilteredSkills = computed(() => {
    const { category, onlyHighlighted } = this._filter();
    return this._skills()
      .filter((skill) => {
        const matchCategory = category === 'all' || skill.category === category;
        const matchHighlight = !onlyHighlighted || skill.highlighted;
        return matchCategory && matchHighlight;
      })
      .sort((a, b) => {
        if (a.highlighted !== b.highlighted) return a.highlighted ? -1 : 1;
        return b.level - a.level;
      });
  });

  readonly filteredSkills = computed(() =>
    this.allFilteredSkills().slice(0, this._page() * this.PAGE_SIZE),
  );

  readonly hasMore = computed(() => this.filteredSkills().length < this.allFilteredSkills().length);

  readonly categories = computed<SkillCategory[]>(() => {
    const unique = new Set(this._skills().map((s) => s.category));
    return Array.from(unique);
  });

  readonly totalSkills = computed(() => this._skills().length);
  readonly highlightedCount = computed(() => this._skills().filter((s) => s.highlighted).length);

  setFilter(filter: Partial<SkillFilter>): void {
    this._filter.update((current) => ({ ...current, ...filter }));
    this._page.set(1);
  }

  resetFilter(): void {
    this._filter.set({ category: 'all', onlyHighlighted: false });
    this._page.set(1);
  }

  loadMore(): void {
    this._page.update((p) => p + 1);
  }

  toggleHighlight(id: string): void {
    this._skills.update((skills) =>
      skills.map((s) => (s.id === id ? { ...s, highlighted: !s.highlighted } : s)),
    );
  }
}

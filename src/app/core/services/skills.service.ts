import { Injectable, computed, signal } from '@angular/core';

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'devops';
  highlighted: boolean;
}

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly _skills = signal<Skill[]>([]);

  readonly skills = this._skills.asReadonly();
  readonly frontendSkills = computed(() => this._skills().filter((s) => s.category === 'frontend'));
  readonly highlightedSkills = computed(() => this._skills().filter((s) => s.highlighted));
  readonly totalSkills = computed(() => this._skills().length);

  setSkills(skills: Skill[]): void {
    this._skills.set(skills);
  }

  toggleHighlight(id: string): void {
    this._skills.update((skills) =>
      skills.map((s) => (s.id === id ? { ...s, highlighted: !s.highlighted } : s)),
    );
  }
}

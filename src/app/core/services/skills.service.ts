import { Injectable, computed, inject, signal } from '@angular/core';
import { Skill, SkillCategory, SkillFilter } from '@core/models/skill.model';
import { catchError, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/skills`;
  private readonly translate = inject(TranslateService);
  private readonly _availableCategories = signal<SkillCategory[]>([]);

  readonly PAGE_SIZE = 24;

  private readonly _skills = signal<Skill[]>([]);
  private readonly _filter = signal<SkillFilter>({
    category: 'all',
    onlyHighlighted: false,
  });
  private readonly _page = signal<number>(1);
  private readonly _loading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  readonly skills = this._skills.asReadonly();
  readonly filter = this._filter.asReadonly();
  readonly page = this._page.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly categories = this._availableCategories.asReadonly();

  readonly allFilteredSkills = computed(() => {
    const { category, onlyHighlighted } = this._filter();
    return this._skills().filter((skill) => {
      const matchCategory = category === 'all' || skill.category === category;
      const matchHighlight = !onlyHighlighted || skill.highlighted;
      return matchCategory && matchHighlight;
    });
  });
  readonly filteredSkills = computed(() =>
    this.allFilteredSkills().slice(0, this._page() * this.PAGE_SIZE),
  );
  readonly hasMore = computed(() => this.filteredSkills().length < this.allFilteredSkills().length);
  readonly totalSkills = computed(() => this._skills().length);
  readonly highlightedCount = computed(() => this._skills().filter((s) => s.highlighted).length);

  constructor() {
    this.fetchSkills();
    this.fetchCategories();
  }

  private fetchSkills(): void {
    this._loading.set(true);
    this._error.set(null);

    const { category, onlyHighlighted } = this._filter();

    const params: any = {
      onlyHighlighted: onlyHighlighted.toString(),
    };

    if (category !== 'all') {
      params.category = category;
    }

    this.http
      .get<Skill[]>(this.apiUrl, { params })
      .pipe(
        catchError((err) => {
          const errorMessage = this.translate.instant('SKILLS.ERRORS.FETCH_ERROR');
          this._error.set(errorMessage);
          this._loading.set(false);
          console.error('API Error:', err);
          return of([]);
        }),
      )
      .subscribe((data) => {
        this._skills.set(data);
        this._loading.set(false);
      });
  }

  private fetchCategories(): void {
    this.http
      .get<SkillCategory[]>(`${this.apiUrl}/categories`)
      .pipe(
        catchError((err) => {
          console.error('Error cargando categorías:', err);
          return of([]);
        }),
      )
      .subscribe((categories) => {
        this._availableCategories.set(categories);
      });
  }

  setFilter(filter: Partial<SkillFilter>): void {
    this._filter.update((current) => ({ ...current, ...filter }));
    this._page.set(1);

    if (filter.category !== undefined || filter.onlyHighlighted !== undefined) {
      this.fetchSkills();
    }
  }

  resetFilter(): void {
    this._filter.set({ category: 'all', onlyHighlighted: false });
    this._page.set(1);

    this.fetchSkills();
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

import { computed, effect, inject, Service, signal } from '@angular/core';
import { Skill, SkillCategory } from '@portfolio/shared/models';

import { httpResource } from '@angular/common/http';
import { SkillFilter } from '@core/models';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from '@shared-libs/services';

@Service()
export class SkillsService {
  private readonly platformService = inject(PlatformService);
  private readonly apiUrl = `${
    this.platformService.isBrowser ? environment.browserApiUrl : environment.apiUrl
  }/skills`;
  private readonly translate = inject(TranslateService);

  readonly PAGE_SIZE = 24;

  private readonly _filter = signal<SkillFilter>({
    category: 'all',
    onlyHighlighted: false,
  });
  private readonly _page = signal<number>(1);

  readonly filter = this._filter.asReadonly();
  readonly page = this._page.asReadonly();

  private readonly skillsResource = httpResource<{ data: Skill[] }>(() => {
    const { category, onlyHighlighted } = this._filter();
    return {
      url: this.apiUrl,
      params: {
        onlyHighlighted: onlyHighlighted.toString(),
        ...(category !== 'all' && { category }),
      },
    };
  });

  private readonly categoriesResource = httpResource<{ data: SkillCategory[] }>(
    () => `${this.apiUrl}/categories`,
  );

  readonly skills = computed(() => this.skillsResource.value()?.data ?? []);
  readonly categories = computed(() => this.categoriesResource.value()?.data ?? []);
  readonly loading = this.skillsResource.isLoading;
  readonly error = computed(() =>
    this.skillsResource.error() ? this.translate.instant('ERRORS.API') : null,
  );

  readonly allFilteredSkills = computed(() => {
    const { category, onlyHighlighted } = this._filter();
    return this.skills().filter((skill) => {
      const matchCategory = category === 'all' || skill.category === category;
      const matchHighlight = !onlyHighlighted || skill.highlighted;
      return matchCategory && matchHighlight;
    });
  });
  readonly filteredSkills = computed(() =>
    this.allFilteredSkills().slice(0, this._page() * this.PAGE_SIZE),
  );
  readonly hasMore = computed(() => this.filteredSkills().length < this.allFilteredSkills().length);
  readonly totalSkills = computed(() => this.skills().length);
  readonly highlightedCount = computed(() => this.skills().filter((s) => s.highlighted).length);

  private readonly logSkillsError = effect(() => {
    const err = this.skillsResource.error();
    if (err) console.error('API Error:', err);
  });
  private readonly logCategoriesError = effect(() => {
    const err = this.categoriesResource.error();
    if (err) console.error('API Error:', err);
  });

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
}

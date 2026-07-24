import { Component, computed, input, output } from '@angular/core';

import { SkillFilter } from '@core/models';
import { TranslateModule } from '@ngx-translate/core';
import { SkillCategory } from '@portfolio/shared/models';

type FilterCategory = SkillCategory | 'all';

@Component({
  selector: 'app-skill-filter',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-filter.component.html',
  styleUrl: './skill-filter.component.scss',
})
export class SkillFilterComponent {
  categories = input.required<SkillCategory[]>();
  activeFilter = input.required<SkillFilter>();
  filterChange = output<Partial<SkillFilter>>();

  allCategories = computed<FilterCategory[]>(() => ['all', ...this.categories()]);

  getLabelFor(cat: FilterCategory): string {
    return `SKILLS.CATEGORIES.${cat.toUpperCase()}`;
  }

  selectCategory(category: FilterCategory): void {
    this.filterChange.emit({ category });
  }

  toggleHighlighted(): void {
    this.filterChange.emit({
      onlyHighlighted: !this.activeFilter().onlyHighlighted,
    });
  }
}

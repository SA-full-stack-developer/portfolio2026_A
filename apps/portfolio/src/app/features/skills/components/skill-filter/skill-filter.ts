import { Listbox, Option } from '@angular/aria/listbox';
import { Component, computed, input, output } from '@angular/core';

import { SkillFilter } from '@core/models';
import { TranslateModule } from '@ngx-translate/core';
import { SkillCategory } from '@portfolio/shared/models';

type FilterCategory = SkillCategory | 'all';

@Component({
  selector: 'app-skill-filter',
  imports: [TranslateModule, Listbox, Option],
  templateUrl: './skill-filter.html',
  styleUrl: './skill-filter.scss',
})
export class SkillFilterComponent {
  categories = input.required<SkillCategory[]>();
  activeFilter = input.required<SkillFilter>();
  filterChange = output<Partial<SkillFilter>>();

  allCategories = computed<FilterCategory[]>(() => {
    console.log('categories', this.categories());
    return ['all', ...this.categories()];
  });
  categorySelection = computed<FilterCategory[]>(() => [this.activeFilter().category]);

  getLabelFor(cat: FilterCategory): string {
    return `SKILLS.CATEGORIES.${cat.toUpperCase()}`;
  }

  onCategorySelectionChange(selection: FilterCategory[]): void {
    const [category] = selection;
    if (category !== undefined) {
      this.selectCategory(category);
    }
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

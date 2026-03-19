import { Component, inject } from '@angular/core';
import { Skill, SkillFilter } from '@core/models/skill.model';

import { SkillsService } from '@core/services/skills.service';
import { TranslateModule } from '@ngx-translate/core';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillFilterComponent } from './components/skill-filter/skill-filter.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, SkillFilterComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly skillsService = inject(SkillsService);

  readonly filteredSkills = this.skillsService.filteredSkills;
  readonly categories = this.skillsService.categories;
  readonly filter = this.skillsService.filter;
  readonly highlightedCount = this.skillsService.highlightedCount;
  readonly totalSkills = this.skillsService.totalSkills;

  onFilterChange(changes: Partial<SkillFilter>): void {
    this.skillsService.setFilter(changes);
  }

  onSkillSelected(skill: Skill): void {
    console.log('Skill seleccionada:', skill.name);
  }
}

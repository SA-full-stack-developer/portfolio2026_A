import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Skill, getSkillLevel } from '@core/models/skill.model';

import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-card',
  imports: [MatTooltipModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
  private readonly translateService = inject(TranslateService);

  skill = input.required<Skill>();
  selected = output<Skill>();

  skillLevel = computed(() => getSkillLevel(this.skill().level));
  skillLevelLabel = computed(() => {
    const key = `SKILLS.LEVELS.${this.skillLevel().toUpperCase()}`;
    return this.translateService.instant(key);
  });
  tooltipText = computed(() => {
    const years = this.skill().yearsOfExperience;
    const key = years === 1 ? 'SKILLS.YEARS_ONE' : 'SKILLS.YEARS_OTHER';
    return this.translateService.instant(key, { count: years });
  });

  onSelect(): void {
    this.selected.emit(this.skill());
  }

  readonly isVisible = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.isVisible.set(true), 50);
  }
}

import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Skill, getSkillLevel } from '@core/models/skill.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-skill-card',
  imports: [MatTooltipModule, TranslateModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
  private readonly translateService = inject(TranslateService);

  skill = input.required<Skill>();
  selected = output<Skill>();

  skillLevel = computed(() => getSkillLevel(this.skill().level));
  skillLevelKey = computed(() => `SKILLS.LEVELS.${this.skillLevel().toUpperCase()}`);

  tooltipKey = computed(() =>
    this.skill().yearsOfExperience === 1 ? 'SKILLS.YEARS_ONE' : 'SKILLS.YEARS_OTHER',
  );

  tooltipParams = computed(() => ({
    count: this.skill().yearsOfExperience,
  }));

  onSelect(): void {
    this.selected.emit(this.skill());
  }

  readonly isVisible = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.isVisible.set(true), 50);
  }
}

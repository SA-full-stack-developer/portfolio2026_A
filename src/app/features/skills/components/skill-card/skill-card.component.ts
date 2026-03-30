import { AfterViewInit, Component, computed, input, output, signal } from '@angular/core';
import { Skill, getSkillLevel } from '@core/models/skill.model';

import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-card',
  imports: [MatTooltipModule, TranslateModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
  host: {
    style: 'display: block',
  },
})
export class SkillCardComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {}

  onSelect(): void {
    this.selected.emit(this.skill());
  }

  readonly isVisible = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.isVisible.set(true), 50);
  }
}

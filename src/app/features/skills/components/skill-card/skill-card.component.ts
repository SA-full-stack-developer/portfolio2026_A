import { Component, computed, input, output } from '@angular/core';
import { Skill, getSkillLevel } from '@core/models/skill.model';

import { NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-skill-card',
  imports: [MatTooltipModule, TranslateModule, IconComponent, NgOptimizedImage],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
  host: {
    style: 'display: block',
  },
})
export class SkillCardComponent {
  skill = input.required<Skill>();
  animate = input<boolean>(false);
  selected = output<Skill>();

  skillLevel = computed(() => getSkillLevel(this.skill().level));
  skillLevelKey = computed(() => `SKILLS.LEVELS.${this.skillLevel().toUpperCase()}`);

  tooltipKey = computed(() =>
    this.skill().yearsOfExperience === 1 ? 'SKILLS.YEARS_ONE' : 'SKILLS.YEARS_OTHER',
  );

  tooltipParams = computed(() => ({
    count: this.skill().yearsOfExperience,
  }));

  protected hasSvgFile = computed(() => this.skill().icon.includes('.'));
  protected isRaster = computed(() => /\.(png|jpg|jpeg|webp)$/i.test(this.skill().icon));
}

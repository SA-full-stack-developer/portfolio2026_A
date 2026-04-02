import { Component } from '@angular/core';
import { ID_EXPERIENCE } from '@core/constants/sections.constants';
import { ExperienceComponent } from '@features/experience/experience.component';
import { HeroComponent } from '@features/hero/hero.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';

@Component({
  selector: 'app-portfolio',
  imports: [SkillsComponent, FeatureFlagDirective, HeroComponent, ExperienceComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  readonly ID_EXPERIENCE = ID_EXPERIENCE;
}

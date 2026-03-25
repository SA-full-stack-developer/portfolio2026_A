import { Component } from '@angular/core';
import { HeroComponent } from '@features/hero/hero.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';

@Component({
  selector: 'app-portfolio',
  imports: [SkillsComponent, FeatureFlagDirective, HeroComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}

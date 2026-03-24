import { Component } from '@angular/core';
import { HeroStatCounterComponent } from '@features/hero/hero-stat-counter/hero-stat-counter.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';

@Component({
  selector: 'app-portfolio',
  imports: [SkillsComponent, FeatureFlagDirective, HeroStatCounterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}

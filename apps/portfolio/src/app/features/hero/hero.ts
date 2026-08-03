import { HERO_INTRO, HERO_STATS } from '@core/constants/feaute-flags.constants';

import { Component } from '@angular/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag';
import { HeroIntroComponent } from './components/hero-intro/hero-intro';
import { HeroStatCounterComponent } from './hero-stat-counter/hero-stat-counter';

@Component({
  selector: 'app-hero',
  imports: [HeroIntroComponent, HeroStatCounterComponent, FeatureFlagDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly HERO_INTRO = HERO_INTRO;
  readonly HERO_STATS = HERO_STATS;
}

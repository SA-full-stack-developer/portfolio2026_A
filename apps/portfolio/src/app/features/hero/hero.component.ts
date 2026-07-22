import { HERO_INTRO, HERO_STATS } from '@core/constants/feaute-flags.constants';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { HeroIntroComponent } from './components/hero-intro/hero-intro.component';
import { HeroStatCounterComponent } from './hero-stat-counter/hero-stat-counter.component';

@Component({
  selector: 'app-hero',
  imports: [HeroIntroComponent, HeroStatCounterComponent, FeatureFlagDirective],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly HERO_INTRO = HERO_INTRO;
  readonly HERO_STATS = HERO_STATS;
}

import { Component } from '@angular/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { HeroIntroComponent } from './components/hero-intro/hero-intro.component';
import { HeroStatCounterComponent } from './hero-stat-counter/hero-stat-counter.component';

@Component({
  selector: 'app-hero',
  imports: [HeroIntroComponent, HeroStatCounterComponent, FeatureFlagDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}

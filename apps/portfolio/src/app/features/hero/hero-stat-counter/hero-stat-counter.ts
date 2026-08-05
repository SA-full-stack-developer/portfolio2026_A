import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { PlatformService } from '@shared-libs/services';

import { StatsService } from '@core/services/stats';
import { StatCounterComponent } from '../components/stat-counter/stat-counter';

@Component({
  selector: 'app-hero-stat-counter',
  imports: [StatCounterComponent],
  templateUrl: './hero-stat-counter.html',
  styleUrl: './hero-stat-counter.scss',
})
export class HeroStatCounterComponent implements AfterViewInit {
  private readonly statsService = inject(StatsService);
  private readonly platformService = inject(PlatformService);

  readonly stats = this.statsService.stats;
  statsVisible = signal(false);

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    this.statsVisible.set(true);
  }
}

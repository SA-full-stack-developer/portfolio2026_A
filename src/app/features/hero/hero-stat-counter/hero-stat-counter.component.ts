import { AfterViewInit, Component, inject, signal } from '@angular/core';

import { PlatformService } from '@core/services/platform.service';
import { StatsService } from '@core/services/stats.service';
import { StatCounterComponent } from '../components/stat-counter/stat-counter.component';

@Component({
  selector: 'app-hero-stat-counter',
  imports: [StatCounterComponent],
  templateUrl: './hero-stat-counter.component.html',
  styleUrl: './hero-stat-counter.component.scss',
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

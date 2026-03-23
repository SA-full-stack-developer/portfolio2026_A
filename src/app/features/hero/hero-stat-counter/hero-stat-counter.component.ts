import { Component, inject } from '@angular/core';
import { STAT_CALCULATION, STAT_KIND, StatValue } from '@core/models/stat.model';
import { calculateDaysBetweenDates, calculateYearsBetweenDates } from '@core/utils/date.utils';

import { STATS_DATA } from '@core/data/stat.data';
import { SkillsService } from '@core/services/skills.service';
import { StatCounterComponent } from '../components/stat-counter/stat-counter.component';

@Component({
  selector: 'app-hero-stat-counter',
  imports: [StatCounterComponent],
  templateUrl: './hero-stat-counter.component.html',
  styleUrl: './hero-stat-counter.component.scss',
})
export class HeroStatCounterComponent {
  private readonly skillsService = inject(SkillsService);
  readonly stats = STATS_DATA;

  getFinalValue(stat: StatValue): number {
    if (stat.kind === STAT_KIND.STATIC) return stat.value;

    if (stat.kind === STAT_KIND.DYNAMIC && stat.calculation === STAT_CALCULATION.YEARS) {
      return calculateYearsBetweenDates(stat.startDate);
    }

    if (stat.kind === STAT_KIND.DYNAMIC && stat.calculation === STAT_CALCULATION.DAYS) {
      return calculateDaysBetweenDates(stat.startDate);
    }

    if (stat.kind === STAT_KIND.SERVICE) {
      return this.skillsService.highlightedCount();
    }

    return 0;
  }

  getShowPlus(stat: StatValue): boolean {
    if (stat.kind === 'static' || stat.kind === 'dynamic') {
      return stat.showPlus ?? false;
    }
    return false;
  }
}

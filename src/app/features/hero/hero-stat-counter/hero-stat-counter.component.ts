import { AfterViewInit, Component, ElementRef, inject, signal } from '@angular/core';
import { STAT_CALCULATION, STAT_KIND, StatValue } from '@core/models/stat.model';
import { calculateDaysBetweenDates, calculateYearsBetweenDates } from '@core/utils/date.utils';

import { STATS_DATA } from '@core/data/stats.data';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { SkillsService } from '@core/services/skills.service';
import { StatCounterComponent } from '../components/stat-counter/stat-counter.component';

@Component({
  selector: 'app-hero-stat-counter',
  imports: [StatCounterComponent],
  templateUrl: './hero-stat-counter.component.html',
  styleUrl: './hero-stat-counter.component.scss',
})
export class HeroStatCounterComponent implements AfterViewInit {
  private readonly skillsService = inject(SkillsService);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly el = inject(ElementRef);

  readonly stats = STATS_DATA;
  statsVisible = signal(false);

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    this.animateStats();
  }

  private animateStats(): void {
    const gsap = this.gsapService.gsap;
    const cards = this.el.nativeElement.querySelectorAll('app-stat-counter');

    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('.hero-stat-counter__grid'),
        start: 'top 85%',
        onEnter: () => this.statsVisible.set(true),
      },
    });
  }

  getFinalValue(stat: StatValue): number {
    if (stat.kind === STAT_KIND.STATIC) return stat.value;

    if (stat.kind === STAT_KIND.DYNAMIC && stat.calculation === STAT_CALCULATION.YEARS) {
      const years = calculateYearsBetweenDates(stat.startDate);
      return years * (stat.multiplier ?? 1);
    }

    if (stat.kind === STAT_KIND.DYNAMIC && stat.calculation === STAT_CALCULATION.DAYS) {
      const days = calculateDaysBetweenDates(stat.startDate);
      return days * (stat.multiplier ?? 1);
    }

    if (stat.kind === STAT_KIND.SERVICE) {
      const num = this.skillsService.highlightedCount();
      return num * (stat.multiplier ?? 1);
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

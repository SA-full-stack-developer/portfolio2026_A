import { AfterViewInit, Component, ElementRef, inject, signal } from '@angular/core';

import { GsapService } from '@core/services/gsap.service';
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
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly el = inject(ElementRef);

  readonly stats = this.statsService.stats;
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
}

import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';

import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scroll-progress',
  imports: [],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss',
})
export class ScrollProgressComponent implements AfterViewInit, OnDestroy {
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private scrollTriggerInstance: ScrollTrigger | undefined;
  private resizeObserver: ResizeObserver | null = null;

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    const gsap = this.gsapService.gsap;

    const tween = gsap.to('.scroll-progress__bar', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'max',
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });

    this.scrollTriggerInstance = tween.scrollTrigger;

    const ResizeObserverClass = typeof ResizeObserver !== 'undefined' ? ResizeObserver : null;
    if (ResizeObserverClass) {
      this.resizeObserver = new ResizeObserverClass(() => {
        if (this.scrollTriggerInstance) {
          this.scrollTriggerInstance.refresh();
        }
      });
      this.resizeObserver.observe(document.documentElement);
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
    }
  }
}

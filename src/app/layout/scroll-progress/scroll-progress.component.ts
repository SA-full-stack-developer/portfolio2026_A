import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';

@Component({
  selector: 'app-scroll-progress',
  imports: [],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss',
})
export class ScrollProgressComponent implements AfterViewInit, OnDestroy {
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly platformService = inject(PlatformService);
  private scrollTriggerInstance: any;
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

    this.resizeObserver = new ResizeObserver(() => {
      if (this.scrollTriggerInstance) {
        this.scrollTriggerInstance.refresh();
      }
    });
    this.resizeObserver.observe(document.documentElement);
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

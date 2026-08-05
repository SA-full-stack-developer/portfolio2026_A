import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  ViewChild,
  afterNextRender,
  inject,
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scroll-progress',
  imports: [],
  templateUrl: './scroll-progress.html',
  styleUrl: './scroll-progress.scss',
})
export class ScrollProgressComponent implements AfterViewInit, OnDestroy {
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly injector = inject(Injector);

  private scrollTriggerInstance: ScrollTrigger | undefined;
  private resizeObserver: ResizeObserver | null = null;

  @ViewChild('progressBar') progressBar!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;

    afterNextRender(
      () => {
        const gsap = this.gsapService.gsap;

        const tween = gsap.to(this.progressBar.nativeElement, {
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
      },
      { injector: this.injector },
    );
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

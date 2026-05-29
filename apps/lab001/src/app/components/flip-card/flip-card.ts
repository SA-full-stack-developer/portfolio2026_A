import {
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { isPlatformBrowser } from '@angular/common';
import { CssVarsDirective } from '@shared-libs/ui';

@Component({
  selector: 'app-flip-card',
  imports: [],
  hostDirectives: [
    {
      directive: CssVarsDirective,
      inputs: ['cssVars'],
    },
  ],
  templateUrl: './flip-card.html',
  styleUrl: './flip-card.scss',
})
export class FlipCard {
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  isHover = input<boolean>(false);
  inner = viewChild<ElementRef>('inner');
  state = signal<boolean>(false);

  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  private isAnimating: boolean = false;

  onClick() {
    if (!this.platformService.isBrowser || this.isAnimating || this.isHover()) return;

    this.isAnimating = true;
    const gsap = this.gsapService.gsap;
    var timeline = gsap.timeline();
    timeline
      .to(this.inner()?.nativeElement, {
        rotationY: this.state() ? 270 : 90,
        duration: 0.3,
        ease: 'none',
      })
      .to(this.inner()?.nativeElement, {
        rotationY: this.state() ? 360 : 180,
        duration: 0.3,
        ease: 'none',
        onComplete: () => {
          if (this.state())
            gsap.set(this.inner()?.nativeElement, {
              rotationY: 0,
            });
          this.state.set(!this.state());
          this.isAnimating = false;
        },
      });
  }

  onMouseEnter() {
    if (!this.platformService.isBrowser || !this.isHover()) return;

    const gsap = this.gsapService.gsap;
    gsap.killTweensOf(this.inner()?.nativeElement);

    gsap.to(this.inner()?.nativeElement, {
      rotationY: 180,
      duration: 0.3,
      ease: 'none',
    });
  }

  onMouseLeave() {
    if (!this.platformService.isBrowser || !this.isHover()) return;

    const gsap = this.gsapService.gsap;
    gsap.killTweensOf(this.inner()?.nativeElement);

    gsap.to(this.inner()?.nativeElement, {
      rotationY: 0,
      duration: 0.3,
      ease: 'none',
    });
  }
}

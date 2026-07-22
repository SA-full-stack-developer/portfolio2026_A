import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  computed,
  inject,
  input,
  viewChild,
  viewChildren,
  ChangeDetectionStrategy
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { CssVarsDirective } from '@shared-libs/ui';

@Component({
  selector: 'app-split-text',
  imports: [],
  hostDirectives: [
    {
      directive: CssVarsDirective,
      inputs: ['cssVars'],
    },
  ],
  templateUrl: './split-text-lab.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './split-text-lab.scss',
})
export class SplitTextLab implements AfterViewInit, OnDestroy {
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  container = viewChild<ElementRef>('container');
  phrases = viewChildren<ElementRef>('phrase');
  private ctx: gsap.Context = {} as gsap.Context;

  text = input<string>();
  splitText = computed(() => this.text()?.split('\n'));

  ngAfterViewInit(): void {
    this.animateText();
  }

  animateText() {
    if (!this.platformService.isBrowser) return;

    const gsap = this.gsapService.gsap;
    const phrases = this.phrases().map((ref) => ref.nativeElement);

    this.ctx = gsap.context(() => {
      gsap.set(phrases, { opacity: 0, x: '-100%' });
      gsap.to(phrases, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: this.container()?.nativeElement,
          start: 'top 80%',
          invalidateOnRefresh: true,
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.ctx.revert();
  }
}

import { Component, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { GsapService } from '@shared-libs/services';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stat-counter',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './stat-counter.html',
  styleUrl: './stat-counter.scss',
})
export class StatCounterComponent {
  private readonly gsapService = inject(GsapService);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly Math = Math;

  icon = input.required<string>();
  label = input.required<string>();
  finalValue = input.required<number>();
  showPlus = input<boolean>(false);
  shouldStartAnimation = input<boolean>(false);
  startDelay = input<number>(0);

  readonly displayValue = signal(0);

  constructor() {
    effect(() => {
      if (this.shouldStartAnimation()) {
        this.startCounting();
      }
    });
  }

  private startCounting(): void {
    const delay = this.startDelay();
    const target = this.finalValue();
    const gsap = this.gsapService.gsap;

    const proxy = { value: 0 };
    const tween = gsap.to(proxy, {
      value: target,
      duration: 1.5,
      delay: delay / 1000,
      ease: 'power2.out',
      onUpdate: () => this.displayValue.set(Math.round(proxy.value)),
      onComplete: () => this.displayValue.set(target),
    });

    this.destroyRef.onDestroy(() => tween.kill());
  }

  formatNumber(value: number): string {
    return Math.round(value).toLocaleString('es-ES');
  }
}

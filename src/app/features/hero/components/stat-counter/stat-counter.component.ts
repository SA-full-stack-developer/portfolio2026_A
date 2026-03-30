import { Component, DestroyRef, effect, inject, input, signal } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const ANIMATION_DURATION = 800;
const ANIMATION_STEPS = 60;
const INTERVAL_TIME = ANIMATION_DURATION / ANIMATION_STEPS;

@Component({
  selector: 'app-stat-counter',
  standalone: true,
  imports: [DecimalPipe, TranslateModule],
  templateUrl: './stat-counter.component.html',
  styleUrl: './stat-counter.component.scss',
})
export class StatCounterComponent {
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
        setTimeout(() => {
          this.startCounting();
        }, this.startDelay());
      }
    });
  }

  private startCounting(): void {
    const target = this.finalValue();
    const increment = target / ANIMATION_STEPS;

    const id = setInterval(() => {
      this.displayValue.update((current) => {
        const next = current + increment;
        if (next >= target) {
          clearInterval(id);
          return target;
        }
        return next;
      });
    }, INTERVAL_TIME);

    this.destroyRef.onDestroy(() => clearInterval(id));
  }
}

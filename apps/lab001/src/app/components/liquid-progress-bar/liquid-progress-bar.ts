import { Component, DestroyRef, computed, inject, signal } from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CssVarsDirective } from '@shared-libs/services';
import { interval } from 'rxjs';

@Component({
  selector: 'app-liquid-progress-bar',
  imports: [],
  hostDirectives: [
    {
      directive: CssVarsDirective,
      inputs: ['cssVars'],
    },
  ],
  templateUrl: './liquid-progress-bar.html',
  styleUrl: './liquid-progress-bar.scss',
})
export class LiquidProgressBar {
  private readonly destroyRef = inject(DestroyRef);
  progress = signal<number>(0);
  phase = signal<number>(0);
  pathD = computed(() => {
    const points = [];
    const base = 20 - this.progress() * 0.2;
    for (let x = 0; x <= this.progress(); x += 1) {
      const y = base + Math.sin(x * 0.3 + this.phase()) * 2;
      points.push(`L ${x} ${y}`);
    }
    return `M 0 20 L 0 ${base} ${points.join(' ')} L ${this.progress()} 20 Z`;
  });

  private readonly _interval = interval(50)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(() => {
      this.progress.update((val: number) => {
        if (val < 100) {
          return ++val;
        } else {
          return 0;
        }
      });
      this.phase.update((val) => val + 0.1);
    });
}

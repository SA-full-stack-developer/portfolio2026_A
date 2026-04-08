import { Component, inject, signal } from '@angular/core';
import { distinctUntilChanged, fromEvent, map } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PlatformService } from '@core/services/platform.service';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-go-to-top',
  imports: [IconComponent],
  templateUrl: './go-to-top.component.html',
  styleUrl: './go-to-top.component.scss',
})
export class GoToTopComponent {
  private readonly platformService = inject(PlatformService);

  protected visible = signal(false);

  constructor() {
    if (!this.platformService.isBrowser) return;
    fromEvent(window, 'scroll')
      .pipe(
        takeUntilDestroyed(),
        map(() => window.scrollY > 300),
        distinctUntilChanged(),
      )
      .subscribe((v) => this.visible.set(v));
  }

  scrollToTop(): void {
    if (!this.platformService.isBrowser) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

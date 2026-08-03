import { AfterViewInit, Component, ElementRef, OnDestroy, inject, signal } from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { FormsModule } from '@angular/forms';
import { AiService } from '@core/services/ai';
import { TranslateModule } from '@ngx-translate/core';
import { MessageDto } from '@portfolio/shared/models';

@Component({
  selector: 'app-ask-me-fab',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './ask-me-fab.component.html',
  styleUrl: './ask-me-fab.component.scss',
})
export class AskMeFabComponent implements AfterViewInit, OnDestroy {
  private readonly aiService = inject(AiService);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly el = inject(ElementRef);

  readonly isOpen = signal(false);
  readonly history = signal<MessageDto[]>([]);
  readonly inputText = signal('');
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  private panelEl!: HTMLElement;

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    this.panelEl = this.el.nativeElement.querySelector('.ask-me-fab__panel');
    this.gsapService.gsap.set(this.panelEl, { opacity: 0, y: 20, display: 'none' });
  }

  toggle(): void {
    const gsap = this.gsapService.gsap;
    const open = !this.isOpen();
    this.isOpen.set(open);

    if (open) {
      gsap.set(this.panelEl, { display: 'flex' });
      gsap.to(this.panelEl, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(this.panelEl, {
        opacity: 0,
        y: 20,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: (): void => {
          gsap.set(this.panelEl, { display: 'none' });
        },
      });
    }
  }

  onInput(value: string): void {
    this.inputText.set(value);
  }

  send(): void {
    const message = this.inputText().trim();
    if (!message || this.loading()) return;

    const userMsg: MessageDto = { role: 'user', content: message };
    this.history.update((h) => [...h, userMsg]);
    this.inputText.set('');
    this.loading.set(true);
    this.error.set(null);

    this.aiService.askMe({ message, history: this.history() }).subscribe({
      next: (response) => {
        this.history.update((h) => [...h, { role: 'model', content: response }]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('AI.ERROR.GENERIC');
        this.loading.set(false);
      },
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  ngOnDestroy(): void {
    this.gsapService.gsap.killTweensOf(this.panelEl);
  }
}

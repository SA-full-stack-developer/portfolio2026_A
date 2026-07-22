import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { FormsModule } from '@angular/forms';
import { AiService } from '@core/services/ai.service';
import { TranslateModule } from '@ngx-translate/core';
import { MessageDto } from '@portfolio/shared/models';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

@Component({
  selector: 'app-chat-cv',
  standalone: true,
  imports: [FormsModule, TranslateModule, ChatMessageComponent],
  templateUrl: './chat-cv.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './chat-cv.component.scss',
})
export class ChatCvComponent implements AfterViewInit, OnDestroy {
  private readonly aiService = inject(AiService);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly el = inject(ElementRef);

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  readonly history = signal<MessageDto[]>([]);
  readonly inputText = signal('');
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  private scrollTriggers: ScrollTrigger[] = [];

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    this.animateEntrance();
  }

  private animateEntrance(): void {
    const gsap = this.gsapService.gsap;
    const el = this.el.nativeElement;

    gsap.from(el.querySelector('.chat-cv'), {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
      },
    });
  }

  onInput(value: string): void {
    this.inputText.set(value);
  }

  async send(): Promise<void> {
    const message = this.inputText().trim();
    if (!message || this.loading()) return;

    const userMsg: MessageDto = { role: 'user', content: message };
    this.history.update((h) => [...h, userMsg]);
    this.inputText.set('');
    this.loading.set(true);
    this.error.set(null);

    this.aiService.chatCv({ message, history: this.history() }).subscribe({
      next: (response) => {
        const modelMsg: MessageDto = { role: 'model', content: response };
        this.history.update((h) => [...h, modelMsg]);
        this.loading.set(false);
        this.scrollToBottom();
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

  private scrollToBottom(): void {
    if (!this.messagesContainer) return;
    const el = this.messagesContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }

  ngOnDestroy(): void {
    this.scrollTriggers.forEach((st) => st.kill());
    this.scrollTriggers = [];
  }
}

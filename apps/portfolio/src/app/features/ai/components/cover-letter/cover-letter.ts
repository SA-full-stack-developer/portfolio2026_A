import { AfterViewInit, Component, ElementRef, OnDestroy, inject, signal } from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { FormsModule } from '@angular/forms';
import { AiService } from '@core/services/ai';
import { TranslateModule } from '@ngx-translate/core';
import { CoverLetterRequest } from '@portfolio/shared/models';

@Component({
  selector: 'app-cover-letter',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss',
})
export class CoverLetterComponent implements AfterViewInit, OnDestroy {
  private readonly aiService = inject(AiService);
  private readonly gsapService = inject(GsapService);
  private readonly platformService = inject(PlatformService);
  private readonly el = inject(ElementRef);

  readonly company = signal('');
  readonly role = signal('');
  readonly jobDescription = signal('');
  readonly result = signal<string | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly copied = signal(false);

  private scrollTriggers = signal<ScrollTrigger[]>([]);

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    const gsap = this.gsapService.gsap;
    const st = gsap.from(this.el.nativeElement.querySelector('.cover-letter'), {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
      },
    });
    if (st?.scrollTrigger)
      this.scrollTriggers.update((triggers) => [...triggers, st.scrollTrigger!]);
  }

  generate(): void {
    if (!this.company().trim() || !this.role().trim() || this.loading()) return;

    const body: CoverLetterRequest = {
      company: this.company(),
      role: this.role(),
      ...(this.jobDescription().trim() && { jobDescription: this.jobDescription() }),
    };

    this.loading.set(true);
    this.error.set(null);
    this.result.set(null);

    this.aiService.coverLetter(body).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('AI.ERROR.GENERIC');
        this.loading.set(false);
      },
    });
  }

  copy(): void {
    if (!this.result()) return;
    navigator.clipboard.writeText(this.result()!).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  ngOnDestroy(): void {
    this.scrollTriggers().forEach((st) => st.kill());
    this.scrollTriggers.set([]);
  }
}

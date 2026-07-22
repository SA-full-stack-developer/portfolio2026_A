import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BREADCRUMB_AI, PAGE_SEO } from '@core/config/seo.config';

import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { ChatCvComponent } from '../../features/ai/components/chat-cv/chat-cv.component';
import { ContactAssistantComponent } from '../../features/ai/components/contact-assistant/contact-assistant.component';
import { CoverLetterComponent } from '../../features/ai/components/cover-letter/cover-letter.component';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [TranslateModule, ChatCvComponent, CoverLetterComponent, ContactAssistantComponent],
  templateUrl: './ai.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './ai.component.scss',
})
export class AiComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['ai']);
    this.seoService.updateSchemas([BREADCRUMB_AI]);
  }
}
